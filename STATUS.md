# Instruments readiness (honest)

Last verified: 2026-07-31 (Spine expanded public-proof; family proof aggregate ok; Phase A PASS).
This is **portfolio knowledge**, not product release authority. Each product’s CI and tags own ship truth.

Master strategy + backlog: **[STRATEGY.md](./STRATEGY.md)**.

## Legend

| Level | Meaning |
| --- | --- |
| **Strong** | Brand + SDK + CLI + MCP + meaningful automated behavior tests on tip |
| **Partial** | Surfaces exist; depth or peer parity incomplete |
| **Scaffold** | Early / missing major surfaces |

## Matrix

| Brand | Repo | Surfaces | Public stars (approx) | Tip evidence | Residual vs bar |
| --- | --- | --- | --- | --- | --- |
| **Citra** | pdf-reader-mcp | Strong | **~875** | public-proof sample.pdf; skill sources API | Live `@sylphx/citra` needs npm auth |
| **Iris** | image-reader-mcp | Strong | early | **`397dfcf`**: synthetic OCR fixture honesty; list-langs; tests **38** | Multi-lang traineddata corpus residual |
| **Cue** | video-reader-mcp | Strong | early | **`c9ddb3c`**: ocr_frame + ASR honesty in public-proof; tests **42** | Whisper depth residual when adapter present |
| **Prism** | smart-reader-mcp | Strong | early | **`b503f2b`**: mock e2e + expectedDelegation + 30s install docs; tests **56** | Live native e2e optional |
| **Spine** | architecture-reader-mcp | Strong/Partial | early | **`37cd119`**: expanded public-proof (openapi+mermaid+multi-format); core **97**; gate **24/24** | UA interactive UX residual |
| **Lookout** | lookout | Strong/Partial | early | **`a816b62`**: robots crawl+optional fetch; 30s install docs; multi-adapter search; tests **39**/1 skip | Not multi-GB browser agent |

Peer anchors (order of magnitude): Graphify ~100k, Understand-Anything ~77k, wigolo ~4k.

## What Instruments is

**Company product-family knowledge and positioning** (composable local-first instruments).
It is **not** a monorepo that ships product code, and product repos must **not** import
an `instruments` package or aliases farm. Composition is via public SDK/MCP contracts.

## Family rules (unchanged)

- One product = one GitHub repo (marketplace + stars)
- Composition via public SDK/MCP, not monorepo product code
- Evidence = result contract, not a tool name

## Phase status

- **Phase A surfaces:** landed + **`scripts/check-phase-a.sh` PASS** (all six products)
- **Phase B competitive depth:** partial (graphql/make/owners, robots crawl, OCR fixture; peer UX residual)
- **Phase C brand/growth:** open (npm auth external blocker for live brand publish)

## Archived (explicit)

- `filesystem-mcp` — archived
- `awesome-mcp-servers` — archived

## Not claimed complete

Equal SOTA peer parity across all six, formal live brand npm publishes (`@sylphx/citra`, …), and continuous *published* peer-beating benches remain **open**. Local aggregate: `bun scripts/aggregate-public-proofs.ts` → `benchmark-artifacts/family_public_proof_aggregate.json` (ok=True).
