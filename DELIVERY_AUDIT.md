# Delivery audit (objective vs evidence)

Last full re-verify: **2026-07-31** (this document). Re-run commands below to refresh.

## Objective requirements

| Requirement | Verdict | Evidence |
| --- | --- | --- |
| Brand + product SSOT documented | **PASS** | STRATEGY, CONSTITUTION, NAMING, PRODUCTS, STATUS, PHASE_* |
| Citra flagship SDK/CLI/MCP | **PASS** | `pdf-reader-mcp` tip; public-proof; high stars |
| Spine vs UA/Graphify (agent-local) | **PASS** | Multi-format graph, mermaid, MCP/SDK/CLI; UA pan/zoom permanent non-goal |
| Lookout vs wigolo (light) | **PASS** | Search/fetch/extract/cache/crawl/research; robots/sitemap/SSRF; no multi-GB default |
| Iris/Cue/Prism same surface bar | **PASS** | Core+SDK+CLI+MCP+tests+skills+gates+30s install; host OCR/ASR pack residual |
| Local-first | **PASS** | No required cloud API keys on default paths |
| Fast / light / powerful | **PASS** | Native hot paths; light Lookout; Spine latency snapshot local |
| Clear tools / no pathological merge | **PASS** | TOOL_SURFACE; independent product repos |
| Evidence = result contract not tool | **PASS** | EVIDENCE_CONTRACT; no `evidence_first` tool registration |
| Core+SDK+CLI+MCP+full tests each | **PASS** | `check-phase-a.sh` PASS; family release-gates brandOk |
| Naming locked (Citra…Lookout) | **PASS** | NAMING + server.json titles (marketplace matrix PASS) |
| filesystem-mcp / awesome archived | **PASS** | filesystem-mcp archived=true; STATUS archived section |
| One product = one repo | **PASS** | instruments docs-only; no aliases monorepo |
| Phase A | **PASS** | `bash scripts/check-phase-a.sh` |
| Phase B agent-local | **PASS** | PHASE_B_RESIDUALS permanent non-goals + tip evidence |
| Phase C pack readiness | **PASS** | `npm-pack-dry-run-matrix.ts` ok=true all six |
| Phase C marketplace metadata | **PASS** | `check-marketplace-server-json.ts` ok=true |
| Phase C live npm publish | **EXTERNAL BLOCKER** | `npm whoami` → **ENEEDAUTH** |
| Phase C continuous public benches | **PARTIAL** | Local aggregates + public GitHub SSOT CI; full peer-host continuous publish residual |

## Live re-verify commands

```bash
bash scripts/check-phase-a.sh
bun scripts/check-marketplace-server-json.ts
bun scripts/npm-pack-dry-run-matrix.ts
bun scripts/run-family-release-gates.ts
bun scripts/aggregate-public-proofs.ts
npm whoami   # expects ENEEDAUTH until scope token provisioned
```

## Goal completion stance (2026-07-31)

**Implementation objective for local-first Instruments family (agent-local bar): delivered** with honest residuals.

Remaining non-local work:
1. **Live npm publish** — requires `@sylphx` automation token (external). Unblock path in PHASE_C.md.
2. **Optional:** broader continuous public peer-bench hosting beyond repo artifacts + family-verify CI.

These do not block product usability via git clone / existing Citra npm / local pack dry-runs.
