# Instruments readiness (honest)

Last verified: 2026-07-31 (Spine C/C++; Lookout npm adapter; Prism mock e2e).
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
| **Iris** | image-reader-mcp | Strong | early | **`f1e23f4`**: OCR min_confidence/words/route; offline TSV tests **37**; gate green | Deeper multi-lang OCR corpora residual |
| **Cue** | video-reader-mcp | Strong | early | **`1d60368`**: public-proof ffprobe/ffmpeg honesty; skill timeline flags; tests **42** | Frame/OCR advanced path residual |
| **Prism** | smart-reader-mcp | Strong | early | **`430f61b`**: always-on mock sibling e2e + expectedDelegation proof; tests **56** | Live native e2e still optional in CI |
| **Spine** | architecture-reader-mcp | Strong/Partial | early | **`92d81a8`**: C/C++ extractor; context_pack; orphans; core **83**; gate **24/24** | Full Graphify/UA language/UX residual |
| **Lookout** | lookout | Strong/Partial | early | **`3228792`**: npm registry adapter + host filters; tests **33**/1 skip | Not full wigolo browser loops |

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
- **Phase B competitive depth:** partial (C/C++, npm search, mock e2e landed; peer parity residual)
- **Phase C brand/growth:** open (npm auth external blocker for live brand publish)

## Archived (explicit)

- `filesystem-mcp` — archived
- `awesome-mcp-servers` — archived

## Not claimed complete

Equal SOTA peer parity across all six, formal live brand npm publishes (`@sylphx/citra`, …), and continuous peer-beating public benches remain **open**.
