# Acceptance checklist (family)

Run per product repo tip. Do not claim family Done until every row has current evidence.

## Phase A surfaces (required)

| Check | Citra | Iris | Cue | Prism | Spine | Lookout |
| --- | --- | --- | --- | --- | --- | --- |
| Brand bin | `citra` | `iris` | `cue` | `prism` | `spine` | `lookout` |
| SDK export | `/sdk` or `/citra` | `/sdk` `/iris` | `/sdk` `/cue` | `/sdk` `/prism` | `/sdk` `/spine` | `/sdk` |
| MCP `server.json` title | Citra | Iris | Cue | Prism | Spine | Lookout |
| Skill `skills/<brand>/SKILL.md` | yes | yes | yes | yes | yes | yes |
| Release-gate / public-proof | yes | yes | yes | yes | yes | yes |
| Brand publish readiness doc | yes | yes | yes | yes | yes | yes |
| Family pointer (not monorepo) | yes | yes | yes | yes | yes | yes |

Commands (examples):

```bash
# family Phase A surface audit (docs-only instruments repo)
bash scripts/check-phase-a.sh

# each product
bun test
bun scripts/release-gate.ts   # or product-specific
bun scripts/public-proof.ts   # when present
bun scripts/brand-pack-plan.ts
```

## Phase B competitive depth (partial)

| Brand | Must show | Residual |
| --- | --- | --- |
| Spine | search/path/impact/neighbors/cycles/multi-lang | not full Graphify/UA UX |
| Lookout | search/fetch/extract/research light SSRF | not full browser loops |
| Citra/Iris/Cue/Prism | citeable media/timeline/sniff proofs | deeper OCR/e2e residual |

## Phase C brand growth (open)

| Check | Status |
| --- | --- |
| Live npm brand id (`@sylphx/citra`…) | needs npm auth |
| Continuous published benches | scripts exist; continuous publish residual |
| Marketplace listings | per-repo residual |

## Evidence rule

[EVIDENCE_CONTRACT.md](./EVIDENCE_CONTRACT.md) — no `evidence_first` tool.
