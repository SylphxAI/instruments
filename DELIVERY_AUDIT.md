# Delivery audit (objective vs evidence)

Generated for the Sylphx Instruments family goal. Re-run commands to refresh.

## Objective requirements

| Requirement | Verdict | Evidence |
| --- | --- | --- |
| Brand + product SSOT documented | **PASS** | instruments STRATEGY/CONSTITUTION/NAMING/PRODUCTS/STATUS |
| Citra flagship SDK/CLI/MCP | **PASS** | pdf-reader-mcp tip; public-proof; ~875★ |
| Spine greenfield vs UA/Graphify | **PASS** (agent-local) | multi-format graph, mermaid, MCP/SDK/CLI; UA dashboard permanent non-goal |
| Lookout greenfield vs wigolo | **PASS** (light) | search/fetch/extract/cache/crawl/research; no multi-GB default |
| Iris/Cue/Prism to same bar | **PASS** (surfaces+proof) | Core/SDK/CLI/MCP/tests/skills/gates/30s install; residual host OCR/ASR packs |
| Local-first | **PASS** | no required cloud API keys on default paths |
| Fast / light / powerful | **PASS** (honest) | native hot paths; light Lookout; multi-format Spine; latency snapshot local |
| Clear tools, no pathological merge | **PASS** | TOOL_SURFACE.md; independent products |
| Evidence = result contract not tool | **PASS** | EVIDENCE_CONTRACT.md; no evidence_first tool in skills/products |
| Core+SDK+CLI+MCP+full tests each | **PASS** | check-phase-a.sh PASS; family release gates brandOk |
| Naming locked Citra…Lookout | **PASS** | NAMING.md + server.json titles |
| filesystem-mcp / awesome archived | **PASS** | STATUS archived section |
| One product = one repo | **PASS** | no instruments monorepo runtime |
| Phase A | **PASS** | check-phase-a.sh |
| Phase B agent-local | **PASS** | PHASE_B_RESIDUALS accepted permanent non-goals |
| Phase C live npm | **BLOCKED external** | npm whoami ENEEDAUTH |
| Phase C continuous public benches | **OPEN residual** | local aggregates only |

## Commands to re-verify

```bash
bash scripts/check-phase-a.sh
bun scripts/check-marketplace-server-json.ts
bun scripts/npm-pack-dry-run-matrix.ts
bun scripts/run-family-release-gates.ts
bun scripts/aggregate-public-proofs.ts
```

## Goal completion stance

Implementation and family SSOT for the **agent-local Instruments bar** are delivered with honest residuals.
**Family goal remains incomplete** until Phase C live npm publish and/or continuous public bench publication are done, **or** the program explicitly accepts npm-auth-only external blocker as terminal for this objective (currently STATUS keeps Phase C **open**).
