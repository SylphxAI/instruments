# Competitive positioning (honest)

Company knowledge only. Stars and peer features move; re-verify before public claims.

## Spine vs architecture graph tools

| Capability | Understand-Anything class | Graphify class | **Spine** |
| --- | --- | --- | --- |
| Local-first graph | often + UI | strong AST local | **yes** (Rust core) |
| Agent MCP/SDK/CLI | skill/UI heavy | CLI/skill | **first-class MCP+SDK+CLI** |
| Ranked search + score explain | varies | query skill | **yes** |
| Path with hop provenance | varies | varies | **yes** (`architecture_path`) |
| Blast radius / git diff impact | partial | partial | **incoming+outgoing + git-diff** |
| Neighborhood | UI explore | query | **overview focus / search includeNeighbors** |
| Import cycles | varies | varies | **overview.cycles** (import/depends) |
| Multi-language | broad | tree-sitter broad | **TS/Py/Rust/Go/Java/C#/Kotlin/Ruby/PHP** (regex-first) |
| Heavy interactive UI | primary | secondary | **not primary** (agent-compact answers) |

**Residual:** not a full Graphify/UA language/UX ecosystem clone; deterministic regex+opt-in Synth AST.

## Lookout vs local web tools

| Capability | wigolo class | **Lookout** |
| --- | --- | --- |
| No API key default | yes | **yes** |
| Search + fetch + extract | yes | **yes** |
| Research multi-step | yes | **web_research advanced** |
| Crawl | yes | **depth-limited advanced** |
| Multi-GB browser/model warmup | often | **no (light default)** |
| SSRF protection | varies | **deny private/metadata** |
| Cite spans / extract meta | varies | **spans + canonical/author/og** |

**Residual:** not a full browser-agent research loop product.

## Media instruments

| Brand | vs common agents path | Our bar |
| --- | --- | --- |
| Citra | dump-text PDF MCP | citeable structure + native |
| Iris | default VLM caption | dimensions/OCR bbox facts |
| Cue | frame VLM | timeline/ffprobe honesty |
| Prism | wire many servers | one sniff → delegate |

## Evidence rule

See [EVIDENCE_CONTRACT.md](./EVIDENCE_CONTRACT.md). Marketing without locators is overclaim.
