# Production deployment

Target: Zeabur Tencent-US2 (Santa Clara), project `6acb4cd2faa6e043a4b657f1`, dedicated server `6a703392087d65c511226380`.

Git repository: `visoar/anyps5-sites`; production branch: `main`.

Each service uses its corresponding root Dockerfile suffix. The initial Git deployment and external verification are recorded below after the deployment completes. The official CLI is `npx zeabur@latest`.

Cloudflare apex A records point to `170.106.195.209`; each www CNAME points to its apex. All four records are proxied, TTL automatic. Existing MX/SPF/DKIM records are preserved. Nginx redirects www to the HTTPS apex while retaining the full request URI.
