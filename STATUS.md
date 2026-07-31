# Instruments readiness (honest)

Last verified: 2026-07-31 (agent session).  
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
| **Iris** | image-reader-mcp | Strong | `Iris.read` offline on `sample.png`; contract tests; server.json Iris | Full release-gate depth vs Citra still broader in PDF suite |
| **Cue** | video-reader-mcp | Strong | `Cue.read({path})` real ffprobe timeline on fixture; path→sources normalize | Needs ffprobe for full path; video_evidence depth optional |
| **Prism** | smart-reader-mcp | Strong | Magic-byte sniff tests; **e2e** PNG→Iris, MP4→Cue, PDF→Citra (when sibling binaries present) | Shell-bin launch fix; e2e skips without sibling natives |
| **Spine** | architecture-reader-mcp | Strong/Partial | Rust core tests incl. `architecture_path` hops+provenance; CLI `spine`; SDK `Spine` | Not full Graphify/UA feature parity; language/extractor breadth residual |
| **Lookout** | lookout | Strong/Partial | SSRF/cache/extract offline; doctor; MCP four tools; **live search pass** (`LOOKOUT_LIVE=1`) | Not full wigolo (crawl/agent/browser); light default by design |

## Family rules (unchanged)

- One product = one GitHub repo (marketplace + stars)  
- Composition via public SDK/MCP, not monorepo product code  
- Evidence = result contract, not a tool name  

## Archived (explicit)

- `filesystem-mcp` — archived  
- `awesome-mcp-servers` — archived  

## Not claimed complete

Equal SOTA depth across all six, formal npm brand package publishes (`@sylphx/citra`, …), and peer-beating public benches for every product remain **open**.
