# Production deployment

Current platform: Coolify. Project `AnyPS5`, environment `production`, repository
`visoar/anyps5-sites`, deployment branch `main`. This project has no staging.
The previous source configuration is [historical recovery material](history/zeabur-deployment.md).

| Site | Coolify application UUID | Private GHCR image |
| --- | --- | --- |
| anyps5.cc | 2kxnbrj9uddis18t1q5tdyln | ghcr.io/visoar/anyps5-sites-cc |
| anyps5.games | zykwyrxo2lfgvfcq2evuod3m | ghcr.io/visoar/anyps5-sites-games |

## CI/CD

Reviewed main pushes run npm ci, security audit, tests and the complete two-site
build on Ubuntu24.04 / Node24.22.2. Each image reuses that build output and is
HTTP-tested for real pages/assets/MIME/cache/404, non-root execution, redirects,
and revision before publishing private `sha-<fullSHA>` tags with GITHUB_TOKEN.
Only then do the two Coolify deployments run. Registry authentication on the
server is already configured; reuse it and the environment secrets.

The GitHub production environment contains COOLIFY_TOKEN(read/write/deploy),
APP_URL_CC / APP_URL_GAMES and COOLIFY_APP_UUID_CC / COOLIFY_APP_UUID_GAMES.
DEPLOY_CHECK_URL_CC / GAMES are temporary acceptance overrides, removed with their
Coolify domain bindings and DNS after cutover. The deployer requires a clean
main GitHub Actions checkout matching GITHUB_SHA. Never upload uncommitted local
files to production. `/revision.txt?deployment=<SHA>` must prove the actual commit.

The Dockerfiles also support a self-contained local source build. CI selects
ASSET_STAGE=prebuilt and does not build Astro twice. Both sites run the official
non-root Nginx1.30.6 alpine-slim image as UID101 on internal8080, limited to
128MiB / 0.25CPU each. Traefik handles TLS; Cloudflare remains proxied with
Full(strict) after the origin certificate verifies. Preserve all email records.
There is no runtime database, Node server or shared application volume.

## Acceptance and rollback

Keep seven-language HTML/metadata, source-scoped search and filters, theme
behavior, CSP/Umami, www301 path/query preservation and genuine404s. Check public
health/revision, localized roots/deep pages, JS/CSS MIME and immutable hashed
assets, robots and sitemap after every deployment. The old Zeabur services are
paused separately only after their replacement is verified; do not delete them.
Rollback uses previously verified SHA images in these same Coolify resources and
repeats public checks. Do not force-push main or resume the old Git deployment path.

## Search discovery and CI

Search-engine notifications remain delegated to the existing Cloudflare setup.
CI does not submit URLs or restore retired notification manifests. Update this
manual, README and AGENTS whenever deployment platforms or release rules change.


CI keeps one workflow and builds each site once per checked commit; image packaging reuses the tested output. Changes limited to operational docs, agent instructions or design/research notes skip the workflow. Content, code, dependencies, tests, deployment scripts and workflow changes still run all checks. Use workflow_dispatch for an intentional full check; deployments retry only the deploy job of a successful main run, preserving the tested SHA image. GitHub-hosted private-repository jobs still consume Actions minutes.
