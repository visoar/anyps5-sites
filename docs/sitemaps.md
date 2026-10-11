# Sitemap entrypoints and Search Console

Both sites use the same sitemap paths and build integration.

| Path | Current response | Purpose |
| --- | --- | --- |
| `/sitemap.xml` | 200 XML `urlset` | Complete list of canonical, indexable pages; advertised in robots.txt |
| `/sitemap-index.xml` | 200 XML `sitemapindex` | Stable Search Console submission; points to `/sitemap.xml` |
| `/sitemap-0.xml` | 200 XML `urlset` | Preserved generated chunk for previously discovered URLs |

The current lists contain 133 URLs on AnyPS5.cc and 336 on AnyPS5.games. Existing seven-language sitemap alternates are preserved byte-for-byte. Sitemap URLs use the HTTPS apex domain and match indexable HTML canonical URLs; noindex/404 pages and filter query variants are excluded.

`scripts/sitemap-compat.mjs` runs after Astro's sitemap integration in each site's `astro:build:done` hook. A single generated chunk is exposed at `/sitemap.xml`, and the index references that path. If Astro splits a larger site into multiple chunks, both entrypoints provide the generated index pointing directly to the chunk URL lists. They never point to another index or to themselves. Original chunk files remain available. No Nginx-only rewrite is needed: the files exist in static build output, preview and production.

## Search Console

Verified through the connected OOMOL Google Search Console API on 2026-10-11 before this release:

| Property | Existing submitted URL | Google status at inspection |
| --- | --- | --- |
| `sc-domain:anyps5.cc` | `https://anyps5.cc/sitemap-index.xml` | Submitted 2026-10-11 10:46:56 UTC; pending; no errors/warnings |
| `sc-domain:anyps5.games` | `https://anyps5.games/sitemap-index.xml` | Submitted 2026-10-11 10:47:17 UTC; downloaded 10:47:18 UTC; no errors/warnings |

The connected account has owner permission for both properties. Keep these established submissions rather than adding a duplicate entry for the same URL inventory. After deployment, verify both XML entrypoints externally, then resubmit the existing index URLs to notify Google of the changed child path. API submission acceptance does not mean Google has downloaded the new files or indexed their URLs. Recheck `isPending`, `lastDownloaded`, errors and warnings when reviewing crawl status.

## Checks and maintenance

- `npm test`: compatibility regression tests cover the single-chunk and multiple-chunk cases, preserving original chunk bytes.
- `npm run build`: both site builds plus `scripts/verify-sites.ts`, which compares both sitemap entrypoints with the indexable canonical page inventory and checks robots.txt.
- Production: confirm 200 responses, XML MIME types and well-formed XML for all three paths; follow index children and compare URL counts and locale alternates. Verify www redirects retain sitemap paths and both deployments match the pushed commit.
- Update robots.txt in `scripts/prepare-assets.ts` as well as the public files, so a later asset refresh preserves the same sitemap declaration.

Reference: [Google Search Central sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
