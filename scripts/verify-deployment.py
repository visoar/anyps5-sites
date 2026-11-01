"""Check the actual static image or public deployment without mutating data."""

import argparse
import json
import os
import re
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import urljoin, urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, request, fp, code, message, headers, newurl):
        return None


def verify(origin, revision, check_host=False):
    config = json.loads(Path(os.environ.get("DEPLOY_CONFIG", str(Path(__file__).with_name("deployment.json")))).read_text())
    origin = origin.rstrip("/")
    opener = build_opener(NoRedirect)

    def get(path, host=None):
        headers = {"User-Agent": "Static-Site-Check/1.0"}
        if host:
            headers["Host"] = host
        request = Request(origin + path, headers=headers)
        try:
            response = opener.open(request, timeout=20)
        except HTTPError as error:
            response = error
        with response:
            return response.status, response.headers, response.read()

    status, headers, body = get("/healthz")
    assert status == 200 and body.strip() == b"ok", "Health endpoint failed"
    status, headers, body = get("/revision.txt?deployment=" + revision)
    assert status == 200 and body.decode().strip() == revision, "Wrong deployed commit"
    assert "no-store" in ", ".join(headers.get_all("Cache-Control", [])), "Revision must not be cached"
    status, headers, body = get("/__deployment_check_missing_" + revision)
    assert status == 404, "Unknown paths must be real 404 responses"
    assert "no-store" in ", ".join(headers.get_all("Cache-Control", [])), "Errors must not be cached"

    assets = set()
    for page in config["pages"]:
        status, headers, body = get(page)
        assert status == 200 and "text/html" in headers.get("Content-Type", ""), page
        assert headers.get("X-Content-Type-Options") == "nosniff", "Missing security header"
        html = body.decode()
        assert "<html" in html and "<title>" in html, "Invalid page HTML"
        assets.update(re.findall(r'(?:src|href)=["\'](/[^"\']+\.(?:css|js)(?:\?[^"\']*)?)["\']', html))
    assert assets, "No CSS or JavaScript assets found in the page"
    for asset in sorted(assets)[:5]:
        status, headers, body = get(asset)
        assert status == 200 and body, asset
        mime = headers.get("Content-Type", "")
        if urlsplit(asset).path.endswith(".css"):
            assert "text/css" in mime, asset
        else:
            assert "javascript" in mime, asset
        if asset.startswith("/_astro/") or asset.startswith("/assets/site-"):
            assert "immutable" in ", ".join(headers.get_all("Cache-Control", [])), "Hashed assets need immutable caching"

    if check_host:
        host = config["host"]
        status, headers, _ = get("/healthz", host)
        assert status == 200 and not headers.get("X-Robots-Tag"), "Production must remain indexable"
        status, headers, _ = get("/healthz", "acceptance.invalid")
        assert status == 200 and "noindex" in headers.get("X-Robots-Tag", ""), "Acceptance hosts must be noindex"
        if config.get("www_redirect"):
            status, headers, _ = get("/deployment-check?keep=1", "www." + host)
            assert status == 301
            assert headers.get("Location") == "https://" + host + "/deployment-check?keep=1"
        if host == "fde01.com":
            status, headers, _ = get("/", host)
            assert status == 302 and urljoin(origin, headers["Location"]) == origin + "/zh/"
        if host == "photocraft.tech":
            status, headers, _ = get("/og/zh/previous-page.png", host)
            assert status == 301 and urljoin(origin, headers["Location"]) == origin + "/og/zh.png"
    print("Verified pages, assets, caching, 404 and deployment commit at " + origin)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", required=True)
    parser.add_argument("--revision", required=True)
    parser.add_argument("--check-host", action="store_true")
    args = parser.parse_args()
    verify(args.url, args.revision, args.check_host)
