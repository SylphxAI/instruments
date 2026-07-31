# Phase C — Brand / growth (honest)

## Landed locally (evidence)

| Check | Evidence |
| --- | --- |
| Brand naming locked | NAMING.md + product skills/server.json titles |
| Brand bins | citra/iris/cue/prism/spine/lookout |
| Brand publish readiness docs | each repo `docs/BRAND_PUBLISH.md` + `brand-pack-plan.ts` |
| npm pack dry-run all six | `bun scripts/npm-pack-dry-run-matrix.ts` → ok |
| Marketplace server.json brand titles | `bun scripts/check-marketplace-server-json.ts` → ok |
| Local proof/gate aggregates | `aggregate-public-proofs.ts`, `run-family-release-gates.ts` |
| Local latency snapshot | `benchmark-artifacts/spine_latency_snapshot.json` |

## External / residual

| Item | State |
| --- | --- |
| Live npm publish `@sylphx/*` (incl. optional `@sylphx/citra`) | **Blocked:** `npm whoami` → ENEEDAUTH (scope token / 2FA) |
| MCP marketplace registration clicks | External per-repo operator step |
| Continuous *public* peer-beating bench publication | Scripts + local artifacts exist; public continuous host residual |
| 10k stars per product | Growth outcome, not a ship gate |

## Unblock path for live npm

1. Authorize machine / CI with `@sylphx` npm automation token.
2. Per product: `bun scripts/brand-pack-plan.ts` then publish from **that product repo** only.
3. Registry readback proof (`npm view @sylphx/<pkg> version`).
4. Never publish from `SylphxAI/instruments`.
