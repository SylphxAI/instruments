# Sylphx Instruments

**Company portfolio knowledge** for Sylphx’s local-first agent instruments.

This repository is **documentation only**. It does **not** host product runtimes,
npm packages, monorepo workspaces, or `instruments-aliases`. Agents and humans
should **know** these rules; product repositories **must not** depend on this
repo as code.

Each product is an **independent GitHub repository** (separate marketplace
listing, release train, and stars). Company-level **composability** means public
SDK/MCP contracts between products — not a single mega-repo.

## Start here

| Doc | Purpose |
| --- | --- |
| **[STRATEGY.md](./STRATEGY.md)** | **Final strategy, positioning, backlog, Done bar** |
| [CONSTITUTION.md](./CONSTITUTION.md) | Hard constraints |
| [STATUS.md](./STATUS.md) | Honest readiness matrix |
| [PHASE_TARGETS.md](./PHASE_TARGETS.md) | Phase A/B/C |
| [EVIDENCE_CONTRACT.md](./EVIDENCE_CONTRACT.md) | Evidence = result contract, not a tool |
| [COMPETITIVE.md](./COMPETITIVE.md) | Peer anchors |
| [ACCEPTANCE.md](./ACCEPTANCE.md) | Checklist |
| [TOOL_SURFACE.md](./TOOL_SURFACE.md) | Clear tools policy |
| [NAMING.md](./NAMING.md) | Brand ↔ repo/package |
| [PRODUCTS.md](./PRODUCTS.md) | Short product pointers |
| [INSTALL.md](./INSTALL.md) | Independent install |
| [CONTINUOUS_BENCH.md](./CONTINUOUS_BENCH.md) | Per-repo public-proof runbook |

## Products (independent repos)

| Brand | Repository | Job |
| --- | --- | --- |
| **Citra** | [pdf-reader-mcp](https://github.com/SylphxAI/pdf-reader-mcp) | PDF evidence for agents |
| **Iris** | [image-reader-mcp](https://github.com/SylphxAI/image-reader-mcp) | Image evidence |
| **Cue** | [video-reader-mcp](https://github.com/SylphxAI/video-reader-mcp) | Video timeline evidence |
| **Prism** | [smart-reader-mcp](https://github.com/SylphxAI/smart-reader-mcp) | Media sniff + route |
| **Spine** | [architecture-reader-mcp](https://github.com/SylphxAI/architecture-reader-mcp) | Repo architecture engine |
| **Lookout** | [lookout](https://github.com/SylphxAI/lookout) | Local web search/fetch |

## Constitution (short)

1. **Local-first** — no required cloud API key on the default path  
2. **Fast · light · powerful**  
3. **Clear tools** — not pathological merge, not vanity explosion  
4. **Evidence** = result contract (locators/routes/warnings), **not** a tool named `evidence_first`  
5. **Each product delivers** Core + SDK + CLI + MCP + tests **in its own repo**  
6. **Composition** via public SDK/MCP contracts — **not** monorepo source import  

## Non-goals for this repo

- Hosting `@sylphx/*` product packages  
- Bundling MCP servers for a single marketplace entry  
- Owning product release CI for all instruments  
- `packages/instruments-aliases/*` or multi-product monorepo shipping  

## Archived (not primary Instruments)

- [filesystem-mcp](https://github.com/SylphxAI/filesystem-mcp) (archived)  
- awesome-mcp-servers (archived)  

## License

MIT (documentation)
