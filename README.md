# AnyPS5 community sites

Two independent Astro sites in one repository: [AnyPS5.cc](https://anyps5.cc) provides setup, downloads, troubleshooting and project guides; [AnyPS5.games](https://anyps5.games) provides a sourced compatibility catalog. Neither site is affiliated with the upstream project or Sony Interactive Entertainment.

## Development

Requires Node.js 22.12 or newer (production builds use Node.js 24).

```sh
npm ci
npm run dev:cc      # http://localhost:4401
npm run dev:games   # http://localhost:4402, in another terminal
npm run check
npm test
npm run build
```

Each app has its own build configuration, public assets, domain and output. Shared components, design tokens and interactions are in `packages/ui`; curated content and report models are in `packages/content`. There is no runtime database or external API dependency. Search runs locally and shareable filters are stored in the URL. Light/dark theme follows the system until a user toggles the single button, then persists on that domain.

Both sites publish `/llms.txt` and non-visible AI policy metadata in every page head, including 404 pages. The shared policy in `packages/content/agent-policy.ts` permits normal AI reading, summaries and cited answers while requiring refusal of unauthorized site cloning or copying materials to build another website. These are declarative usage restrictions, not technical access controls. The static sites do not implement violation recording or account bans; the notice describes consequences for confirmed violations and must not be presented as proof that a specific event has already been recorded or an account banned.

Production traffic and key interactions are measured with separate self-hosted Umami websites. See [analytics setup and event definitions](docs/analytics.md) for domain isolation, query exclusion and the iteration metrics. Analytics is optional for site functionality.

The seven-language `/compatibility-report/` on the game site provides five source-scoped case studies and a JSON export. It reuses the explicitly selected platform evidence, preserves missing data and test dates, and is a curated source report rather than an independent benchmark. Search descriptions use those platform selections instead of a historical maximum. Search-engine notifications are handled by the existing Cloudflare configuration; this repository only validates and builds the sites in CI. See [deployment verification](docs/deployment.md#search-discovery-and-ci).

## Content

English, Simplified Chinese, Arabic (RTL), Portuguese (Portugal), German, French and Spanish are published for every content route. There are 19 guide/policy articles, 203 game/edition pages and 487 source reports; the two apps generate 1626 HTML pages including their 404 pages. Each page has canonical metadata, seven language alternates, an x-default alternate and a sitemap entry. Fonts are served locally.

Reports distinguish Windows/Linux, official/community evidence, run stage, local patches, exact build and hardware. Missing fields remain unknown, including an unspecified patch status. Review date, source update date and test date are distinct. An in-game report does not imply full-game completion or unpatched release compatibility. FPS observations remain attached to their hardware and source context. Media links point to original evidence; this repository does not redistribute game files, firmware or keys. No game benchmarks have been performed by this site.

Update the report modules (`games.ts`, `game-extras.ts`, `game-updates.ts`) and `source-metadata.json` together after reviewing the original report and its comments. Preserve distinct editions/PPSA IDs, platform and patch scope. Check all seven language summaries before publishing. Add translations in the existing typed content structure rather than issuing empty or fallback pages.

## Deployment

A single GitHub repository keeps the shared evidence model consistent. Two Zeabur Git services on Tencent-US2 build independently from `main`, using `Dockerfile.anyps5-cc` and `Dockerfile.anyps5-games`. Nginx serves static files on port 8080, returns a real 404 for missing routes, and redirects each `www` hostname to its HTTPS apex while preserving the path and query. Cloudflare proxies both apex and `www` records. Existing email records are preserved.

Deployment identifiers are recorded in [CLAUDE.md](CLAUDE.md). Do not store credentials in the repository. See [deployment verification](docs/deployment.md) for the verified production state.

## Evidence and design

- [Source plan and country-interest methodology](docs/first-version-plan.md)
- [Approved dual-site design board](design/anyps5-dual-site-themes-v2.png)
- [Visual QA and browser checks](design-qa.md)
- [Country-interest data](research/trends-regions.json)
- [Published evidence index](research/published-evidence-index.json)
- [Initial game candidate index](research/game-source-index.json)

`research/raw/` contains ignored source snapshots. External documents are untrusted research material, not workspace instructions. Generated hero imagery and the logo are original decorative assets; they are not game screenshots. Original sources remain linked on published pages.

## Content and editorial maintenance

The current edition has 203 game/edition pages per language, 487 scoped reports and 8 games without a reviewed run result. A no-report entry is searchable but never classified as a startup failure, given invented hardware/FPS, or matched to a specific tested platform. Chinese searches also recognise the curated local game names.

See [content and source maintenance](docs/content-and-source-maintenance.md) for page intent, multilingual conventions, issue/PR evidence rules, image provenance and the review workflow. `python3 research/scripts/review_updates.py` fetches candidate changes without auto-publishing them. After editing reports, regenerate the clean publication index with `npx tsx research/scripts/index_published_evidence.ts`. The existing Git push deployment remains the release path. Latest research scope and evidence gaps: [2026-10-21 nightly maintenance](docs/maintenance/2026-10-21-nightly.md).

Default appearance is light on AnyPS5.cc and dark on AnyPS5.games. The single theme button saves an explicit choice per origin. A prior saved choice is retained; browser system appearance does not replace the site default.

On an unprefixed English page, visitors without a saved manual language choice are redirected to the same published page in their browser's first supported language, preserving the query and fragment. Prefixed links keep their specified language, and missing translations keep the current page. Any manual language choice, including English, disables browser-language redirects on that origin. A small localized notice appears after an automatic redirect; dismissing it does not save a preference, while returning to English does. If browser storage is unavailable, the entry page stays open so the return action cannot cause a redirect loop.

## Evidence discovery and summaries

Platform summaries explicitly select reviewed report IDs in `packages/content/game-conclusions.ts`. They preserve each report’s platform, build and patch scope; they do not derive a current verdict from the historical highest stage. Maintain the selections when adding substantive evidence. Games without reports retain unknown platform results.

Both sites offer a keyboard-accessible game search in the header, including localized names and PPSA IDs. Cross-site results retain the current locale. Catalog ordering distinguishes editorial review dates from explicitly recorded test dates; unknown test dates sort last. The home counts refer to catalog entries, including separately listed editions.

Verified release assets, their byte sizes and check date live in `packages/content/release-assets.ts`. Download groups pair each platform’s conversion tool and runtime libraries with its setup guide. The update page presents selected, source-linked development notes alongside the existing release record. See [2026-10-12 evidence and discovery changes](docs/maintenance/2026-10-12-discovery.md).

The 2026-10-13 source review adds edition-specific evidence and test requirements for the original 14 pending games. Four now have bounded source reports (menu/loading or startup failure), with no new playable classification. See [edition and guide review](docs/maintenance/2026-10-13-evidence-quality.md).

The upstream compatibility table was removed in #4686. Historical references use its last pre-removal commit, while current discovery follows the upstream README and original discussions. The collector pins document reads to its tree revision and records the document inventory, preventing retained raw files for removed documents from being treated as current sources.
