# Self-hosted game media

Updated 2026-10-12. All page raster images and current OG/Twitter images are served from the site's own origin as WebP. The existing native SVG logo and browser-compatible PNG/ICO favicons retain their formats. Previously public JPEG social-image URLs remain available for old shares.

## Sources and asset inventory

- 45 game/edition pages have official/publisher artwork: 45 covers and 78 promotional screenshots (123 source assets).
- `packages/content/game-media.json` retains the original page, provider, image URLs and editorial review date.
- `packages/content/game-media-local.json` maps each source to its exported file, actual download URL, source/export SHA-256, byte counts and actual dimensions.
- Committed WebP masters live in `packages/ui/assets/games/<slug>/`. Astro imports them and emits hashed, same-origin images under `/_astro/`, including responsive variants. Production builds do not fetch remote media.
- Two games still have no verified artwork and retain the existing game icon. Promotional images remain labelled as promotional material, separate from AnyPS5 report evidence. Source links stay available. Report screenshots/videos that are only evidence links remain links rather than being mixed into the promotional gallery.

The downloaded high-resolution source set totals 36.12 MiB; the exported masters total 16.44 MiB, a 54.5% reduction at the chosen encoding settings. This compares the fetched source bytes with those same images' WebP masters, not total page-transfer sizes. Some PlayStation endpoints previously returned only a 400px preview; the new fetch requests the same artwork at up to 1920px before optimizing it. That quality improvement is separate from compression savings.

## Update command

Run `npm run media:sync` after changing the source inventory. It downloads only the three already-reviewed media hosts, checks HTTP responses and decodes image bytes, rejects unexpected redirects or oversized payloads, and caches originals in ignored `work/media-originals/`. Covers are bounded to 1200px on the longest edge and screenshots to 1920px, with EXIF orientation applied and no local upscaling. WebP quality is 82, effort 5. The download URL records explicit `wid=1920`, JPEG quality 90 requests for PlayStation's Image Serving endpoints; the original editorial source URL remains unchanged.

Unchanged source mappings with matching exported SHA-256 reuse the committed files. Use `npm run media:sync -- --refresh` to refetch and re-encode upstream changes. Inspect changed artwork and its identity before committing. The manifest is written only after every image succeeds; a failed sync must not be followed by publication. Do not substitute a different game's art to make a failed download pass.

## Page delivery

- Homepage: 48/96px cropped thumbnail variants, sized for the existing 34/44px UI.
- Catalog cards: up to 320/640px variants with the full cover art preserved.
- Game overview: up to 180/360px cover variants, matching 124/180px display sizes.
- Gallery: up to 480/960/1920px variants, with a same-origin link to the WebP master. The helper clamps widths to the available source width.
- Each image supplies dimensions, responsive `srcset`/`sizes` where useful, asynchronous decoding and lazy loading except the visible game cover and homepage background.
- Game OG/Twitter and Article image metadata use the local cover's absolute URL and actual dimensions. Default share artwork is local `/social-v4.webp`, 1200×630; `scripts/prepare-assets.ts` regenerates it and preserves previous JPEG URLs.

Astro hashes the exported filenames. The existing Nginx `/_astro/` location supplies a one-year cache lifetime; a changed asset gets a different URL. Both sites' CSP allows only same-origin/data images. The seven-language privacy page now describes local image delivery and distinguishes external source-link visits.

## Checks

`npm run check` verifies source-to-local correspondence, the full inventory, file existence, WebP format, dimensions, byte count and SHA-256. `npm run build` also checks every rendered image and responsive variant for a real same-origin WebP/SVG file, and checks OG/Twitter WebP references. The sitemap checks still compare the complete indexable inventory against both entrypoints.

Before release, inspect a PlayStation gallery, Steam/publisher artwork, catalog cards and mobile thumbnails in the browser. After push-triggered deployment, compare the latest Git SHA on both Zeabur services, verify WebP MIME/cache headers and image/metadata dimensions, and inspect browser-loaded image origins. Preserve provenance and promotional/report distinctions during future updates.
