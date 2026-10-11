# Brand icon and social images

Refreshed 2026-10-11 using the built-in image_gen tool. The final prompt set and input-reference roles are saved in `design/brand-refresh-v2-prompts.json`.

- `packages/ui/assets/brand-mark.png`: the shared transparent 512×512 architectural A/gateway symbol, midnight ink with a lime path. The wordmark remains native page text so AnyPS5 casing and readability are preserved in every language and theme.
- `packages/ui/assets/portal-social.png`: generated light architectural AnyPS5.cc share artwork, with the language-neutral OS names Windows and Linux.
- `packages/ui/assets/games-social.png`: generated dark lighthouse AnyPS5.games share artwork, with the universal identifiers PS5 and PPSA.

Run `npx tsx scripts/prepare-assets.ts` after changing the source artwork. It produces a real 16/32/48px ICO, 32/96px PNG favicons, a 180px Apple touch icon, and the 1200×630 JPEG social image for each site. Inspect small icons at native size and verify image sizes/ICO entries before building. Page icons use `?v=2`, while the new default OG/Twitter image is `/social-v2.jpg`; this gives browsers and share fetchers a new resource URL. The existing public `/social.jpg` URL is retained for previous shares.

Default branded OG images declare JPEG type and 1200×630 dimensions. Game pages with an explicit official game cover continue using their game-specific image without falsely declaring the default artwork dimensions. OG/Twitter text remains localized; the branded images use domain names and technical identifiers without language-specific slogans.

The refreshed mark was checked in the actual page header in light and dark mode; both pages load the new Astro-hashed asset without console errors or horizontal overflow. The complete build checks 471 static pages, including icon/share metadata references. Generated decorative imagery is separate from official game promotional material and runtime-report evidence.
