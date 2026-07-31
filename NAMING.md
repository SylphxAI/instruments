# Naming

| Brand | Transitional package / repo |
| --- | --- |
| Citra | `@sylphx/pdf-reader-mcp` / `pdf-reader-mcp` |
| Iris | `@sylphx/image-reader-mcp` / `image-reader-mcp` |
| Cue | `@sylphx/video-reader-mcp` / `video-reader-mcp` |
| Prism | `@sylphx/smart-reader-mcp` / `smart-reader-mcp` |
| Spine | `@sylphx/architecture-reader-mcp` / `architecture-reader-mcp` |
| Lookout | `@sylphx/lookout` / `lookout` |

Brand `bin` names (`citra`, `iris`, `cue`, `prism`, `spine`, `lookout`) are
declared **inside each product package**, not via a multi-product alias farm.

Dedicated npm names like `@sylphx/citra` (if published) must ship **from that
product’s repository**.
