# Design QA — AnyPS5 dual sites

final result: passed

Reviewed 2026-10-11 in the Codex in-app browser. This is a production implementation of the selected design direction, with real source-based content and functional filters.

## Visual truth and normalization

Source: `design/anyps5-dual-site-themes-v2.png` (1536 × 1024).
The four panels are cropped at (37,21,717,514), (784,21,717,514), (37,552,717,457) and (784,552,717,457). Canvas margins are excluded.

Implementation: `docs/qa/cc-dark.jpg`, `cc-light.jpg`, `games-dark.jpg`, `games-light.jpg`, from browser-rendered full-page captures at a 1440 × 1028 CSS viewport, deviceScaleFactor 1. Dark first views use 1440 × 1028 pixels; light first views use 1440 × 914 pixels to match the shorter light reference panels. These crops are downsampled to the matching 717-pixel panel width. No browser chrome or native window scale is compared.

Full comparisons (reference left, implementation right in each single image):
- `docs/qa/compare-cc-dark.jpg`
- `docs/qa/compare-games-dark.jpg`
- `docs/qa/compare-cc-light.jpg`
- `docs/qa/compare-games-light.jpg`

Focused comparisons: `docs/qa/focus-cc-dark.jpg`, `focus-cc-light.jpg`, `focus-games-dark.jpg`, `focus-games-light.jpg`. These enlarge the title/actions/steps and the filters/table respectively. Original browser captures remain in the same folder with `-full.jpg` suffixes.

## Findings and comparison history

1. **P1 — Flat first-screen composition and weak title hierarchy.** Initial implementation treated the hero as a detached section and used smaller type, losing the approved architectural depth. Fixed by generating separate canyon and storm/lighthouse raster assets, integrating the backdrop behind the header and first information sections, and using 108px desktop display type. The four final comparisons show the restored silhouettes, far light, tiny human figure, lighthouse and left-side negative space.
2. **P2 — Hero light reduced lower text contrast.** The canyon shaft competed with the third entry. Fixed the background crop/height and top/bottom readability overlays. Steps now occupy a predominantly dark area in dark mode; their light-mode text uses dark ink. Post-fix evidence: both portal comparisons.
3. **P2 — Narrow gutters and small entry controls drifted from the reference.** Fixed desktop home gutters to 52px at 1440px, enlarged navigation/actions, restored document/wrench/folder icons and vertical rules, and enlarged entry headings/body and compatibility rows. Post-fix evidence: all four comparisons and focused crops.
4. **P2 — Lighthouse was clipped by the first background crop.** Fixed desktop/mobile focal alignment. It is visible above the right cliff, mirrored to the left in RTL. Post-fix evidence: both games comparisons and `games-mobile-ar.jpg`.
5. **P2 — Theme control used unnecessary menu choices.** Replaced with one accessible sun/moon button per user instruction; it toggles light/dark and remembers the choice. System preference is only the initial default. Verified after reload and route navigation.
6. **P2 — Filtered results could display the aggregate game stage.** Fixed stage/platform/evidence labels to come from the same matching reports. Linux Silt displays Boot; adding official evidence produces the empty state. Local patches are explicitly labeled in rows/details, and patched gameplay uses the experimental color rather than looking like an unpatched result.
7. **P2 — Copy feedback was attached to the wrong container.** Fixed status lookup to the containing code block. Verified Chinese copy success and exact clipboard content.
8. **P2 — Native RTL select painting with transparent backdrop.** Changed selects to opaque theme surfaces and removed their backdrop filter. Final Arabic mobile capture shows all three selected labels.
9. **P2 — Arabic display line height and synthetic weight.** Added the real 800 weight and a language-specific 1.4 display line height. Final Arabic mobile capture has intact connected glyphs and comfortable two-line headings.

Earlier invalid screenshots caused by simultaneous browser and CDP viewport overrides were discarded and recaptured after clearing the browser override. They were not used to judge the design.

No actionable P0/P1/P2 findings remain in the checked views.

## Required fidelity surfaces

- **Typography:** self-hosted Inter variable and Noto Sans Arabic; large two-line portal and single-line desktop catalog heading; native wrapping retained for translations. No truncated headings. Reading text, table type and secondary metadata have distinct hierarchy.
- **Spacing/layout:** continuous hero, transparent header, restrained corner radii, thin separators and three vertical entry columns. Mobile converts entries/rows into readable stacked layouts. The complete guide/catalog continues below the first screen.
- **Color/tokens:** deep navy/ink, lime actions and pale warm light surfaces; patch/result text carries meaning independently of color. Light/dark tokens apply to articles, report fields, controls and menus as well as home pages.
- **Imagery:** original ImageGen raster canyon, lighthouse and transparent logo. They are optimized by Astro/sharp. No CSS or handcrafted SVG substitute for the reference imagery. Standard icons use Phosphor assets. Decorative scenes are not presented as game screenshots.
- **Copy/content:** AnyPS5 casing; all seven languages contain full article/report text. The catalog uses sourced run stages instead of a generalized playable guarantee. Unknown data is explicit; review/source/test dates are separate. Source links and original media references are accessible from details.

## Intentional production adaptations

The approved board contains three illustrative rows and a first-screen footer. The product contains 24 games, individual report evidence, search plus platform/stage/evidence selectors, and complete guide sections below the hero; the footer therefore occurs after the full content. This additional content is retained to satisfy the requested catalog and detailed portal. The redesigned logo and single theme button follow explicit user instructions. Decorative marginal slogans are omitted in favor of the actual source/build scope. Menu/localized title lengths naturally vary.

## Browser verification

- Viewports: 1440 × 1028 desktop; 768 × 1024 tablet; 390 × 844 phone, all at deviceScaleFactor 1.
- Both themes rendered, toggled by one button and persisted after reload/navigation.
- English plus Chinese/Arabic/Portuguese/German/French/Spanish home routes checked on both sites at 390px; `scrollWidth === innerWidth` throughout. Results in `docs/qa/locale-checks.json`.
- Arabic RTL home and game detail; Chinese guide and copy status; mobile menu opening/Escape and language picker; language switch preserves the current game route.
- Search by PPSA ID, conjunctive filters, result count, empty state, reset and copied share URL.
- Report detail navigation, source links and patch qualifiers.
- Local console/error logs checked: zero errors and zero warnings on both tabs.
- Content/build validation: all seven locales, 17 articles, 24 games and 30 reports; 338 generated HTML pages, canonical/hreflang/internal links and assets verified. Five meaningful catalog/data tests pass.

## Follow-up polish

P3: generated imagery retains the composition rather than exact pixel identity with the original mock. The Inter letterforms and original logo are production assets, so their contours differ slightly from generated reference lettering. Additional game reports and independent native-speaker editorial reviews can be added through the documented content workflow.

## Production confirmation

Both HTTPS domains were opened in the browser after the Git deployment. The production layouts use the same source assets and components; single-button theme switching, PPSA03306 + Linux => Boot with local patches, one-result grammar, reset, and zero console warnings/errors were rechecked. Production screenshots are recorded in `docs/qa/production-cc-dark-full.jpg` and `production-games-dark-full.jpg`; public network checks cover all seven localized home routes and the key guide/game paths.
