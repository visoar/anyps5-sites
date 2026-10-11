# Brand icon and social images

Updated 2026-10-11. The shared mark is Lucide **Gamepad 2**, a native SVG with the original path/line geometry. Its only visual settings are midnight-ink stroke (`#14252d`) and 2.25 stroke width. AnyPS5 remains native page text with the requested casing.

## Source and license

- Official icon: https://lucide.dev/icons/gamepad-2
- Pinned upstream commit: `70562c1ee1c4fdcf736fe97bc893fb8511927934`.
- Unmodified upstream SVG: `design/icons/lucide-gamepad-2.svg`.
- Upstream license: `design/icons/LICENSE.lucide` (ISC for Gamepad 2).
- Site SVG: `packages/ui/assets/brand-mark.svg`; it includes the ISC notice.

No new runtime icon dependency is required. Header and footer use this SVG directly in both themes, with optical padding inside the existing pale tile. Other UI icons continue using the existing Phosphor dependency.

## Reproducible exports

Run `npx tsx scripts/prepare-assets.ts` after changing the mark. This rasterizes the exact SVG for a real 16/32/48px ICO, 32/96px PNG favicons, and 180px Apple touch icon. The favicon canvas is pale `#eef3e9` so the dark stroke remains legible on light and dark browser chrome. Inspect small icons at native size and verify ICO entries before building.

The same script deterministically composites the exact SVG on a pale rounded badge over the former generated symbol in both social canvases. `portal-social.png` and `games-social.png` preserve the generated architectural/lighthouse scene and typography as source canvases; these originals are not served as social images. The script's explicit badge bounds fully replace their former symbol. Background-generation provenance remains in `design/brand-refresh-v2-prompts.json`; the current icon is an upstream library asset, not generated artwork.

Outputs are 1200×630 JPEGs. The default OG/Twitter URL is `/social-v3.jpg`, and page icons use `?v=3`. Previously public `/social.jpg` and `/social-v2.jpg` paths are also overwritten with the current export so earlier links remain usable. A new default URL allows share fetchers to discover the current artwork; external services may still retain their own cached previews.

## Metadata and validation

Default branded OG images declare JPEG type and 1200×630 dimensions. Game pages with an explicit official game cover retain their game-specific image without declaring the branded artwork's dimensions. OG/Twitter text remains localized; the branded images use domain names and technical identifiers without language-specific slogans.

Run `npm run build` to validate the full set of 471 static pages and their asset/metadata references. Verify both themes and mobile header padding in the browser, then confirm deployment of the same Git commit to both sites and compare public icon/share assets to local exports. Generated decorative imagery remains separate from official game promotional material and runtime-report evidence.
