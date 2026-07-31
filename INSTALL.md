# Install (independent products)

Each instrument is its **own** GitHub repo / npm package. Do not expect a monorepo install.

| Brand | npm (transitional) | MCP title | Notes |
| --- | --- | --- | --- |
| Citra | `@sylphx/pdf-reader-mcp` | Citra | brand bin `citra` |
| Iris | `@sylphx/image-reader-mcp` | Iris | brand bin `iris` |
| Cue | `@sylphx/video-reader-mcp` | Cue | needs `ffprobe` for full path |
| Prism | `@sylphx/smart-reader-mcp` | Prism | routes to siblings |
| Spine | `@sylphx/architecture-reader-mcp` | Spine | package under `packages/mcp-server` |
| Lookout | `@sylphx/lookout` | Lookout | light local web |

```bash
# examples
npx @sylphx/pdf-reader-mcp
npx @sylphx/lookout
# brand bins when installed globally
citra | iris | cue | prism | spine | lookout
```

Brand dual-publish (`@sylphx/citra`, …) requires npm auth and is documented per-repo in `docs/BRAND_PUBLISH.md`.

See [ACCEPTANCE.md](./ACCEPTANCE.md), [TOOL_SURFACE.md](./TOOL_SURFACE.md), [EVIDENCE_CONTRACT.md](./EVIDENCE_CONTRACT.md).
