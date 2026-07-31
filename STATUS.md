# Instruments readiness (honest)

Last verified: 2026-07-31 (relative link resolve, CLI max-file-bytes, prism proof fields).
This is **portfolio knowledge**, not product release authority. Each product’s CI and tags own ship truth.

## Legend

| Level | Meaning |
| --- | --- |
| **Strong** | Brand + SDK + CLI + MCP + meaningful automated behavior tests on tip |
| **Partial** | Surfaces exist; depth or peer parity incomplete |
| **Scaffold** | Early / missing major surfaces |

## Matrix

| Brand | Repo | Surfaces | Behavior evidence (examples) | Residual vs bar |
| --- | --- | --- | --- | --- |
| **Citra** | pdf-reader-mcp | Strong | Public proof sample.pdf; skill; brand plan | Live `@sylphx/citra` needs npm auth |
| **Iris** | image-reader-mcp | Strong | Public proof; OCR path reported honest when tesseract absent | Citra-depth OCR residual |
| **Cue** | video-reader-mcp | Strong | Public proof with ffprobe/duration honesty | Live brand npm needs auth |
| **Prism** | smart-reader-mcp | Strong | Sniff public proof + brandPublishDoc/skill fields | e2e needs sibling natives |
| **Spine** | architecture-reader-mcp | Strong/Partial | CLI max-file-bytes; exclude merge; 77 tests; gate 24/24 | Not full Graphify/UA ecosystem |
| **Lookout** | lookout | Strong/Partial | relative link resolve; text/json extract; 29 tests | Not full wigolo browser loops |

## What Instruments is

**Company product-family knowledge and positioning** (composable local-first instruments).
It is **not** a monorepo that ships product code, and product repos must **not** import
an `instruments` package or aliases farm. Composition is via public SDK/MCP contracts.

## Family rules (unchanged)

- One product = one GitHub repo (marketplace + stars)
- Composition via public SDK/MCP, not monorepo product code
- Evidence = result contract, not a tool name

Tool surface: [TOOL_SURFACE.md](./TOOL_SURFACE.md). Acceptance: [ACCEPTANCE.md](./ACCEPTANCE.md). Competitive notes: [COMPETITIVE.md](./COMPETITIVE.md). Evidence contract: [EVIDENCE_CONTRACT.md](./EVIDENCE_CONTRACT.md).

## Phase status

- **Phase A surfaces:** landed (see [PHASE_TARGETS.md](./PHASE_TARGETS.md))
- **Phase B competitive depth:** partial
- **Phase C brand/growth:** open (npm auth external blocker for live brand publish)

## Archived (explicit)

- `filesystem-mcp` — archived
- `awesome-mcp-servers` — archived

## Not claimed complete

Equal SOTA peer parity across all six, formal live brand npm publishes (`@sylphx/citra`, …), and continuous peer-beating public benches remain **open**.
