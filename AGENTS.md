# AnyPS5 repository guide

- Current deployment: Coolify, private GHCR, main Site CI/CD; `docs/deployment.md` is authoritative. Zeabur instructions are historical.
- Preserve the independent cc/games builds and content/evidence boundaries. Node is build-only; runtime is official non-root Nginx slim on8080.
- After code/config changes run npm test and npm run build; deployment changes also test actual images and both sites' HTTP behavior. No macOS Actions runner.
- Production uses only committed, reviewed main through CI, immutable SHA tags and verified public revision. Never LOCAL-upload an uncommitted checkout.
- Reuse existing per-environment credentials; do not log or commit secrets. Fix dependency/security warnings, test and release as authorized; do not suppress audits to claim remediation.
- Migrations update this guide, README and deployment/maintenance docs. Preserve the source environment layout; no staging here. Delete temporary domains, DNS and dedicated rules after use.
- Preserve user changes and review existing implementations/tests before editing. Do not alter historical evidence to claim new tests.
