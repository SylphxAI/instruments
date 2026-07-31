# Instruments readiness (honest)

Last verified: 2026-07-31 (C#, skills, phase targets, gates).
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
| **Citra** | pdf-reader-mcp | Strong | Flagship SDK/CLI/MCP/native; server.json Citra | Transitional package id; optional `@sylphx/citra` publish |
| **Iris** | image-reader-mcp | Strong | Skill + public-proof; release-gate incl. brand/skill | Citra-depth benches residual |
| **Cue** | video-reader-mcp | Strong | Skill; release-gate brand+skill | ffprobe residual |
| **Prism** | smart-reader-mcp | Strong | Skill; release-gate brand+skill | e2e needs sibling natives |
| **Spine** | architecture-reader-mcp | Strong/Partial | C# + multi-lang; reverse impact; skill; release-gate 22/22; 63 tests | Not full Graphify/UA ecosystem parity |
| **Lookout** | lookout | Strong/Partial | Skill; release-gate 9/9; CI | Not full wigolo browser loops |

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

Phase targets: [PHASE_TARGETS.md](./PHASE_TARGETS.md).

## Not claimed complete

Equal SOTA depth across all six, formal npm brand package publishes (`@sylphx/citra`, …), and peer-beating public benches for every product remain **open**.
