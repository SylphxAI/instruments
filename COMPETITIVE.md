# Competitive notes (family)

Stars/dates drift — re-check before public claims. Snapshot ~2026-07-31.

Full strategy: [STRATEGY.md](./STRATEGY.md).

## Spine vs architecture peers

| Capability | [Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) (~77k★) | [Graphify](https://github.com/Graphify-Labs/graphify) (~100k★) | **Spine** |
| --- | --- | --- | --- |
| Primary user | Human interactive graph + agent skill | Local AST graph + agent skill | **Agent/SDK/MCP/CLI first** |
| Deterministic structure | mixed LLM + structure | strong local AST | **deterministic extractors + optional AST** |
| Path / impact | varies | graph query | **architecture_path / impact + hops** |
| Neighbors / explain | UI-heavy | CLI/graph | **search scoreExplain / includeNeighbors** |
| Import cycles | varies | varies | **overview.cycles** (import/depends) |
| Multi-language | broad | tree-sitter broad | **TS/Py/Rust/Go/Java/C#/Kotlin/Ruby/PHP** (growing) |
| Heavy interactive UI | primary | secondary | **not primary** (agent-compact answers) |
| Default install weight | product-dependent | local | **keep light** |

**Residual:** not a full Graphify/UA language/UX ecosystem clone; deterministic regex+opt-in deeper AST.

**Wedge:** agent-compact architecture evidence with file:line proof, first-class MCP/SDK, not dashboard-first.

## Lookout vs local web tools

| Capability | [wigolo](https://github.com/KnockOutEZ/wigolo) (~4k★) class | **Lookout** |
| --- | --- | --- |
| No API key default | yes | **yes** |
| Search + fetch + extract | yes | **yes** |
| Research multi-step | yes | **web_research advanced** |
| Crawl | yes | **depth-limited advanced** |
| Multi-GB browser/model warmup | often | **no (light default)** |
| SSRF protection | varies | **deny private/metadata** |
| Cite spans / extract meta | varies | **spans + canonical/author/og** |

**Residual:** not a full browser-agent research loop product.

**Wedge:** same local-web job class as wigolo, lighter default, strict honesty.

## Media instruments

| Brand | vs common agents path | Our bar |
| --- | --- | --- |
| Citra (~875★ flagship) | dump-text PDF MCP | citeable structure + native |
| Iris | default VLM caption | dimensions/OCR bbox facts |
| Cue | frame VLM | timeline/ffprobe honesty |
| Prism | wire many servers | one sniff → delegate |

Typical GitHub “mcp pdf” dump tools sit far below Citra on structure+native packaging; still re-bench periodically.

## Evidence rule

See [EVIDENCE_CONTRACT.md](./EVIDENCE_CONTRACT.md). Marketing without locators is overclaim.
