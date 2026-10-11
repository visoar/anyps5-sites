# Deployment context

Repository: `visoar/anyps5-sites` (monorepo; independent services).
Zeabur project: `6acb4cd2faa6e043a4b657f1` (`anyps5`).
Dedicated server: `6a703392087d65c511226380` (`Tencent-US2`).
Region: `server-6a703392087d65c511226380`.
Origin IP verified 2026-10-11: `170.106.195.209`.

Deploy with official CLI `npx zeabur@latest`; Git `main` is the production trigger.
Service names must match Dockerfile suffixes: `anyps5-cc`, `anyps5-games`.
Never commit tokens. Preserve existing Cloudflare email records.

## Zeabur services
- AnyPS5.cc service ID: `6acb56c04873e494859d37fd`.
- AnyPS5.games service ID: `6acb56cdfaa6e043a4b65bf9`.
- GitHub repository ID: `1414166397`; branch `main`.
