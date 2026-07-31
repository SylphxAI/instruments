# Phase targets (family SSOT)

Company knowledge only. Product ship truth lives in each product repo CI/tags.

## Phase A — Surfaces (**landed** with tip evidence 2026-07-31)

Each product independently delivers:

1. Core engine (local-first default)
2. SDK (programmatic, brand class export)
3. CLI (brand bin + doctor)
4. MCP stdio + `server.json` title = Brand
5. Automated tests + release-gate style checks
6. Agent skill surface (`skills/<brand>/SKILL.md`)
7. Family pointer to this docs-only repo (no monorepo import)
8. Brand publish readiness doc (`docs/BRAND_PUBLISH.md`) + `scripts/brand-pack-plan.ts`

**Evidence:** per-product release-gates + public-proof scripts on tip (see STATUS.md).

## Phase B — Competitive depth (**partial**)

| Brand | Competitive anchor | Phase B bar | Tip note |
| --- | --- | --- | --- |
| Citra | dump-text PDF MCPs | Citeable structure + native speed + public benches | Flagship; skill + sample.pdf public proof |
| Iris | VLM-default stacks | Deterministic media twin + OCR bbox + release-gate | Public proof + gate |
| Cue | frame VLM stacks | Timeline evidence + ffprobe honesty | Public proof + gate |
| Prism | multi-server wiring | Single sniff/route with evidence envelope | Sniff public proof |
| Spine | Understand-Anything / Graphify | Ranked query, path, reverse impact, multi-language, skill | Cycles + neighbors + orphans + context_pack; multi-lang extractors |
| Lookout | wigolo | Light default search/fetch/extract/research + SSRF + CI | Richer extract meta; host diversity; offline research |

Residual: full peer feature parity and peer-beating published benches.

## Phase C — Brand / growth (**open** — blocked on npm auth for live publish)

1. Optional dedicated npm names (`@sylphx/citra`, …) **published from each product repo**
2. Peer-beating public benches with publishable artifacts (scripts landed; continuous publication residual)
3. Marketplace listings per repo
4. 10k-star craft (demo, install friction, honest limits)

**Live npm publish** requires `@sylphx` scope automation token (not present in this environment). Dry-run readiness: `bun scripts/brand-pack-plan.ts` in each product.

## Explicit non-goals

- Multi-product monorepo or `instruments-aliases` farm
- `evidence_first` meta-tool
- Reviving archived `filesystem-mcp` / `awesome-mcp-servers` as primary products
