"""Update one image reference, deploy once, and verify the public commit."""

import json
import os
import subprocess
import sys
import time
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlsplit
from urllib.request import Request, urlopen

ORIGIN = "https://c.ullrai.com"


def api(path, method="GET", data=None):
    request = Request(
        ORIGIN + "/api/v1/" + path,
        data=json.dumps(data).encode() if data is not None else None,
        headers={
            "Authorization": "Bearer " + os.environ["COOLIFY_TOKEN"],
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": "Static-Site-Deploy/1.0",
        },
        method=method,
    )
    for attempt in range(6):
        try:
            with urlopen(request, timeout=30) as response:
                return json.load(response)
        except (URLError, TimeoutError) as error:
            if method != "GET" or attempt == 5:
                raise
            if isinstance(error, HTTPError):
                if error.code not in (429, 500, 502, 503, 504):
                    raise
                error.close()
            time.sleep(5)


def release_revision():
    if os.environ.get("GITHUB_ACTIONS") != "true" or os.environ.get("GITHUB_REF") != "refs/heads/main":
        raise RuntimeError("Production deployment requires the committed main checkout in GitHub Actions")
    revision = os.environ["GITHUB_SHA"]
    head = subprocess.check_output(["git", "rev-parse", "HEAD"], text=True).strip()
    if head != revision or subprocess.check_output(["git", "status", "--porcelain"], text=True).strip():
        raise RuntimeError("Refusing to deploy a mismatched or modified checkout")
    return revision


def main():
    revision = release_revision()
    uuid = os.environ["COOLIFY_APP_UUID"]
    image = os.environ["IMAGE"]
    address = os.environ.get("DEPLOY_CHECK_URL") or os.environ["APP_URL"]
    if urlsplit(address).scheme != "https":
        raise ValueError("Deployment verification URL must use HTTPS")
    api("applications/" + uuid, "PATCH", {
        "docker_registry_image_name": image,
        "docker_registry_image_tag": "sha-" + revision,
    })
    # Never retry POST: a lost response can still have queued the deployment.
    result = api("deploy?uuid=" + uuid, "POST", {})
    deployments = result.get("deployments", [])
    if len(deployments) != 1 or not deployments[0].get("deployment_uuid"):
        raise RuntimeError("Expected exactly one queued deployment")
    deployment_id = deployments[0]["deployment_uuid"]
    print("Coolify deployment: " + deployment_id, flush=True)
    deadline = time.monotonic() + 600
    while time.monotonic() < deadline:
        status = api("deployments/" + deployment_id)["status"]
        if status == "finished":
            break
        if status in ("failed", "cancelled", "canceled"):
            raise RuntimeError("Coolify deployment " + status)
        time.sleep(5)
    else:
        raise TimeoutError("Deployment exceeded ten minutes")
    deadline = time.monotonic() + 180
    while time.monotonic() < deadline:
        result = subprocess.run([
            sys.executable, str(Path(__file__).with_name("verify-deployment.py")),
            "--url", address, "--revision", revision,
        ], capture_output=True, text=True)
        if result.returncode == 0:
            print(result.stdout, end="")
            return
        time.sleep(5)
    raise RuntimeError("Public verification did not pass within three minutes")


if __name__ == "__main__":
    main()
