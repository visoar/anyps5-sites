# Self-hosted game media

Updated 2026-10-24. All page raster images and current OG/Twitter images are served from the site's own origin as WebP. The existing native SVG logo and browser-compatible PNG/ICO favicons retain their formats. Previously public JPEG social-image URLs remain available for old shares.

## Sources and asset inventory

- 179 game/edition pages have official/publisher artwork: 179 covers and 82 promotional screenshots (261 source assets).
- `packages/content/game-media.json` retains the original page, provider, image URLs and editorial review date.
- `packages/content/game-media-local.json` maps each source to its exported file, actual download URL, source/export SHA-256, byte counts and actual dimensions.
- Committed WebP masters live in `packages/ui/assets/games/<slug>/`. Astro imports them and emits hashed, same-origin images under `/_astro/`, including responsive variants. Production builds do not fetch remote media.
- 108 entries still have no verified artwork and retain the existing game icon. Promotional images remain labelled as promotional material, separate from AnyPS5 report evidence. Source links stay available. Report screenshots/videos that are only evidence links remain links rather than being mixed into the promotional gallery.

The downloaded high-resolution source set totals 65.11 MiB; the exported masters total 34.13 MiB, a 47.6% reduction at the chosen encoding settings. This compares the fetched source bytes with those same images' WebP masters, not total page-transfer sizes. Some PlayStation endpoints previously returned only a 400px preview; the new fetch requests the same artwork at up to 1920px before optimizing it. That quality improvement is separate from compression savings.

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

Blasphemous 2’s current publisher artwork carries The Third Sin branding. Its edition note explicitly preserves the report’s unknown content version and does not infer that expansion or Mea Culpa was tested. Artwork does not identify the reported region/PPSA.

The nightly addition includes 26 covers and four edition-gallery copies. ASTRO artwork is shared promotional material, not evidence of the separately reported PPSA versions. Tourist Bus Simulator links US artwork PPSA04434 while its report is PPSA04433; that distinction is explicit. Diablo II artwork does not establish later expansions in the 01.039.000 report. ccleste retains an icon and links its original PS5 source-port repository.

The 15 October maintenance adds 21 identity-checked covers for 24 new entries. UFC 6, FIFA 21 and Syobon Action retain icons. Withering Rooms artwork is a different regional PPSA; Void Terrarium artwork is shared between separately catalogued PPSA03042/03061; MGS4 uses the collection’s promotional art; 007 cover DLC branding does not identify tested content. All retain explicit edition notes.

The 16 October addition has 14 verified covers. Quake uses its original 2021 key art; the current page OG image promoted Quake II content and was rejected during visual review. Puyo artwork is PPSA01937 while the report is PPSA01530. Blasphemous 2 artwork advertises The Third Sin, and Borderlands 4 advertises Super Deluxe Edition; neither identifies the tested DLC. Two community recompilation/port entries retain icons.

The18 October addition includes eight verified covers. The available Furi OG image is PS4-branded and was rejected for this PS5 entry; unavailable matching pages and new homebrew retain icons. No report screenshot was substituted with promotional artwork.

The19 October addition includes five identity-checked covers. The generic EA FC page now advertises FC27 and was rejected for FC25; unavailable/missing matching store art retains icons. The existing STEINS;GATE entry and cover are reused rather than duplicated. No new report screenshot or media host was added.

20 October adds five identity-checked PlayStation covers: Echoes of Aincrad, Monster Hunter Wilds, LEGO Builder’s Journey, Superliminal and Squirrel with a Gun. Tomba’s guessed publisher URL404 retains an icon. Cross-generation promotional art does not prove the tested PPSA package or AnyPS5 rendering.

21 October adds eight PlayStation promotional covers: Destruction AllStars, The Exit8, Dying Light The Beast, Valor Mortis, Life is Strange Reunion, Street Fighter6, Another Crab’s Treasure and Assassin’s Creed Shadows. Current anniversary/DLC marketing does not establish the tested content version. Ten new entries retain icons; Graveyard2 store identity verified but no selected OpenGraph art. Sources/hashes in game-media manifests; no test screenshot invented.

22 October adds13 identity-checked promotional covers;20 new entries keep icons. The Messenger PS4 art and retail Village art are rejected. BALLxPIT Naturalist Update/MortalShellII Rotten Autumn branding does not identify tested content; HiFi US artPPSA17168 differs from reportPPSA17191. No test screenshot was invented or replaced with promotional art.

23 October adds seven official covers;21 new entries retain icons. Region-package differences for Pathless, OuterWilds, OctopathII and art of rally are explicit in all seven languages. AustraliaDLC promotional branding does not identify tested content. Covers were visually checked, downloaded, decoded, hashed and converted with the existing self-hosted WebP process; none is a test screenshot.

24 October adds six official covers;17 new entries retain icons. All six region/package differences and SeaStars Sunset Edition/Goat/Taiko marketing-content boundaries are explicit in seven languages. Contact sheet, decode/hash and self-hosted WebP checks pass; no new emulator screenshot is claimed.
