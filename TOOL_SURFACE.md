# Tool surfaces (clear, not pathological)

Principle: few independently meaningful tools; Tool Search friendly; **no** `evidence_first` meta-tool.

| Brand | Core tools | Advanced | Notes |
| --- | --- | --- | --- |
| **Citra** | PDF read/search/evidence ops (product tools) | provider/OCR paths as configured | citeable structure |
| **Iris** | `read_image` | OCR flags | Agent Media Twin |
| **Cue** | `read_video` | optional frame/OCR evidence | timeline honesty |
| **Prism** | `read_media` | — | sniff → delegate |
| **Spine** | 8: index, status, overview, search, path, trace, impact, evidence | — | neighbors via overview/search flags |
| **Lookout** | search, fetch, extract, cache | crawl, research | light default |

Composition is via public SDK/MCP contracts across **independent repos**, not monorepo tool merging.
