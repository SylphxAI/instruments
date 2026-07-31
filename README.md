# Sylphx Instruments

**Company portfolio knowledge** for Sylphx’s local-first agent instruments.

This repository is **documentation only**. It does **not** host product runtimes,
npm packages, or a monorepo of servers.

Each product is an **independent GitHub repository** (separate marketplace
listing, release train, and stars).

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
6. **Composition** happens via public SDK/MCP contracts between products — not by importing sibling source trees  

See [CONSTITUTION.md](./CONSTITUTION.md), [NAMING.md](./NAMING.md), and honest [STATUS.md](./STATUS.md).

## Non-goals for this repo

- Hosting `@sylphx/*` product packages  
- Bundling MCP servers for a single marketplace entry  
- Owning product release CI for all instruments  

## License

MIT (documentation)
