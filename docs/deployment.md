# Production deployment

Target: Zeabur Tencent-US2 (Santa Clara), project `6acb4cd2faa6e043a4b657f1`, dedicated server `6a703392087d65c511226380`.

Git repository: `visoar/anyps5-sites`; production branch: `main`.

Each service uses its corresponding root Dockerfile suffix. The initial Git deployment and external verification are recorded below after the deployment completes. The official CLI is `npx zeabur@latest`.

Cloudflare apex A records point to `170.106.195.209`; each www CNAME points to its apex. All four records are proxied, TTL automatic. Existing MX/SPF/DKIM records are preserved. Nginx redirects www to the HTTPS apex while retaining the full request URI.

## Verified first deployment — 2026-10-11

| Site | Service ID | Initial deployment |
| --- | --- | --- |
| AnyPS5.cc | `6acb56c04873e494859d37fd` | `6acb56c0c0a5252069b84827` |
| AnyPS5.games | `6acb56cdfaa6e043a4b65bf9` | `6acb56ce48c5c4b07806ea4c` |

Environment: `6acb4cd25a13ed952d20bb01`. Initial deployed commit: `8580ba2056ec03817685497c464f209309bc0354`; both deployments report `RUNNING`. Zeabur records the GitHub repository, `refs/heads/main`, commit SHA and Docker build plan. Both services have their apex and www domains bound.

Cloudflare DNS was re-read after creation: four web records are proxied; each zone retains its five existing MX/TXT email records. Always Use HTTPS is enabled. SSL mode remains Full because this dedicated-server origin serves Zeabur's self-signed certificate; Cloudflare's public edge HTTPS certificate verifies normally. Do not switch this origin to Full (strict) without installing a matching trusted origin certificate first.

External verification covers 28 checks: all seven localized home routes per site, Chinese Windows guide, Arabic game detail, HTTPS, www path/query-preserving 301 redirects, robots/sitemaps, health checks and genuine 404 status with noindex. Browser production checks cover both themes, toggle persistence, source-scoped PPSA search/filter/reset and zero console warnings/errors.

A final documentation push is used to verify automatic Git-triggered deployment on both services. No duplicate services or manually uploaded deployment is used.

The `c542893` documentation push produced Git deployments `6acb57a1da7cf920c2638788` (cc) and `6acb57a5da7cf920c263878a` (games), both referencing that exact commit and `refs/heads/main`. This proves the push binding beyond the initial deployment. Later content corrections use the same trigger. To verify any release, compare the latest deployment `commitSHA` with `git rev-parse HEAD` and require `RUNNING`.

## Reading/content release — 2026-10-11

Content commit `68493dbaecb890fe1aac289dbc92e65f6ce3582c` triggered the existing Git-bound services: cc deployment `6acb6622da7cf920c2638aa9` and games deployment `6acb6627da7cf920c2638aab`. Both reached RUNNING with that exact commit. Cloudflare's two apex A records and two www CNAME records were re-read and remain proxied.

The release includes 40 games / 33 reviewed reports / 14 games without reviewed reports, seven-language native-purpose copy, detailed guide supplements, 12 source-scoped development notes and per-site light/dark defaults. Browser production evidence is `docs/qa/editorial-production-cc-light.jpg`, `editorial-production-games-dark.jpg`, and `editorial-production-wukong-zh.jpg`. Both selected Wukong gallery images load under the production CSP; no console errors or warnings appear. A previously saved explicit theme still takes precedence over the new default.

The 28 baseline external HTTP checks passed again, including both www redirects with path/query preservation and all seven localized roots. Additional release checks cover the new game states, guide example, development-note statuses, native metadata and 469 indexable sitemap entries. The documentation/evidence follow-up uses the same automatic push trigger; always verify its latest commit too rather than relying on the content commit's status.

## Recurring maintenance releases

Daily maintenance continues in the existing chat at 03:40 Asia/Shanghai. A normal push to `origin main` triggers both existing Git services. Read deployments with `npx zeabur@latest deployment list --service-id <service> --env-id 6acb4cd25a13ed952d20bb01 --json -i=false`, and match the full pushed SHA separately on each service before reporting release success. Keep deployment receipts and external-check results in ignored `research/raw/daily-YYYY-MM-DD/release.json`; the maintenance note and Git history identify the content change. Resume any outstanding deployment/acceptance checks before making another content commit.
