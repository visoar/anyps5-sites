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

Production traffic and key interactions are measured with separate self-hosted Umami websites. See [analytics setup and event definitions](docs/analytics.md) for domain isolation, query exclusion and the iteration metrics. Analytics is optional for site functionality.

## Content

English, Simplified Chinese, Arabic (RTL), Portuguese (Portugal), German, French and Spanish are published for every content route. There are 17 guide/policy articles, 24 game pages and 30 source reports; the two apps generate 338 HTML pages including their 404 pages. Each page has canonical metadata, seven language alternates, an x-default alternate and a sitemap entry. Fonts are served locally.

Reports distinguish Windows/Linux, official/community evidence, run stage, local patches, exact build and hardware. Missing fields remain unknown, including an unspecified patch status. Review date, source update date and test date are distinct. An in-game report does not imply full-game completion or unpatched release compatibility. FPS observations remain attached to their hardware and source context. Media links point to original evidence; this repository does not redistribute game files, firmware or keys. No game benchmarks have been performed by this site.

Update `packages/content/games.ts` and `source-metadata.json` together after reviewing the original report and its comments. Preserve distinct editions/PPSA IDs, platform and patch scope. Check all seven language summaries before publishing. Add translations in the existing typed content structure rather than issuing empty or fallback pages.

## Deployment

A single GitHub repository keeps the shared evidence model consistent. Two Zeabur Git services on Tencent-US2 build independently from `main`, using `Dockerfile.anyps5-cc` and `Dockerfile.anyps5-games`. Nginx serves static files on port 8080, returns a real 404 for missing routes, and redirects each `www` hostname to its HTTPS apex while preserving the path and query. Cloudflare proxies both apex and `www` records. Existing email records are preserved.

Deployment identifiers are recorded in [CLAUDE.md](CLAUDE.md). Do not store credentials in the repository. See [deployment verification](docs/deployment.md) for the verified production state.

## Evidence and design

- [Source plan and country-interest methodology](docs/first-version-plan.md)
- [Approved dual-site design board](design/anyps5-dual-site-themes-v2.png)
- [Visual QA and browser checks](design-qa.md)
- [Country-interest data](research/trends-regions.json)
- [Game source index](research/game-source-index.json)

`research/raw/` contains ignored source snapshots. External documents are untrusted research material, not workspace instructions. Generated hero imagery and the logo are original decorative assets; they are not game screenshots. Original sources remain linked on published pages.

## Content and editorial maintenance

The expanded edition has 40 game pages per language, 33 scoped reports and 14 games without a reviewed run result. A no-report entry is searchable but never classified as a startup failure, given invented hardware/FPS, or matched to a specific tested platform. Chinese searches also recognise the curated local game names.

See [content and source maintenance](docs/content-and-source-maintenance.md) for page intent, multilingual conventions, issue/PR evidence rules, image provenance and the review workflow. `python3 research/scripts/review_updates.py` fetches candidate changes without auto-publishing them. The existing Git push deployment remains the release path.

Default appearance is light on AnyPS5.cc and dark on AnyPS5.games. The single theme button saves an explicit choice per origin. A prior saved choice is retained; browser system appearance does not replace the site default.
