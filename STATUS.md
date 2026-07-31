# Instruments readiness (honest)

Last verified: 2026-07-31 (Spine impact mermaid + workflows; family proof runner).
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
| **Iris** | image-reader-mcp | Strong | early | **`e24ff68`**: list-langs honesty + OCR language warnings; tests **37** | Multi-lang OCR corpora residual |
| **Cue** | video-reader-mcp | Strong | early | **`c9ddb3c`**: ocr_frame + ASR honesty in public-proof; tests **42** | Whisper depth residual when adapter present |
| **Prism** | smart-reader-mcp | Strong | early | **`430f61b`**: always-on mock sibling e2e + expectedDelegation proof; tests **56** | Live native e2e still optional in CI |
| **Spine** | architecture-reader-mcp | Strong/Partial | early | **`2339e3e`**: impact/context **mermaid**; shell+C/C++; GHA workflows; core **88**; gate **24/24** | Full Graphify/UA language/UX residual |
| **Lookout** | lookout | Strong/Partial | early | **`36b21d4`**: research host filters; DDG+Wiki+npm+HN; tests **35**/1 skip | Not full wigolo browser loops |

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

- **Phase A surfaces:** landed
- **Phase B competitive depth:** partial (impact mermaid, GHA workflows, family proof runner; peer parity residual)
- **Phase C brand/growth:** open (npm auth external blocker for live brand publish)

## Archived (explicit)

- `filesystem-mcp` — archived
- `awesome-mcp-servers` — archived

## Not claimed complete

Equal SOTA peer parity across all six, formal live brand npm publishes (`@sylphx/citra`, …), and continuous *published* peer-beating benches remain **open** (local `scripts/run-family-proofs.sh` runbook exists).
