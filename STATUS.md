# Instruments readiness (honest)

Last verified: 2026-07-31 (impact reverse, release gates, skill).
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
| **Citra** | pdf-reader-mcp | Strong | `Citra` SDK export tests; production native path; marketplace `server.json` title Citra | Package id still transitional `@sylphx/pdf-reader-mcp`; optional `@sylphx/citra` publish |
| **Iris** | image-reader-mcp | Strong | SDK/CLI/MCP; release-gate brand Iris 15/15 | Depth still thinner than Citra benches |
| **Cue** | video-reader-mcp | Strong | SDK/CLI/MCP; release-gate brand Cue 26/26 | ffprobe-dependent residual |
| **Prism** | smart-reader-mcp | Strong | Dispatch; release-gate brand Prism 24/24 | e2e needs sibling natives |
| **Spine** | architecture-reader-mcp | Strong/Partial | Ranked search; reverse **incomingImpact**; Java; agent skill; public proof; 62 core tests | Not full Graphify/UA UX/skill ecosystem parity |
| **Lookout** | lookout | Strong/Partial | CI + release-gate; DDG unwrap; research; 19 tests | Not full wigolo browser loops |

## What Instruments is

**Company product-family knowledge and positioning** (composable local-first instruments).
It is **not** a monorepo that ships product code, and product repos must **not** import
an `instruments` package or aliases farm. Composition is via public SDK/MCP contracts.

## Family rules (unchanged)

- One product = one GitHub repo (marketplace + stars)  
- Composition via public SDK/MCP, not monorepo product code  
- Evidence = result contract, not a tool name  

## Archived (explicit)

- `filesystem-mcp` — archived  
- `awesome-mcp-servers` — archived  

## Not claimed complete

Equal SOTA depth across all six, formal npm brand package publishes (`@sylphx/citra`, …), and peer-beating public benches for every product remain **open**.
