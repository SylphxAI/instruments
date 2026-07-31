# Instruments readiness (honest)

Last verified: 2026-07-31 (search ranking, Java, Lookout CI).
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
| **Iris** | image-reader-mcp | Strong | SDK/CLI/MCP + sample.png behavior tests; family docs → instruments | Release-gate depth still thinner than Citra |
| **Cue** | video-reader-mcp | Strong | SDK/CLI/MCP + ffprobe timeline tests; family docs → instruments | Needs ffprobe; video_evidence optional residual |
| **Prism** | smart-reader-mcp | Strong | Sniff + e2e delegate; instruments family pointer; product-local dispatch ADR | e2e skips without sibling natives |
| **Spine** | architecture-reader-mcp | Strong/Partial | Ranked search; overview languages/counts; TS/Python/Rust/Go/**Java** extractors; honest coverage gaps; 60+ core tests | Not full Graphify/UA skill/UX parity |
| **Lookout** | lookout | Strong/Partial | DDG URL unwrap; extract+research; **CI workflow**; 19 automated tests | Not full wigolo browser loops; light default by design |

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
