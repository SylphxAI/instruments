# Continuous public benches (family)

Each product owns its own `scripts/public-proof.ts` and release-gate.
This doc is the **company-level runbook** (not a monorepo runner).

## Per-product (run in that repo)

```bash
# Citra
cd pdf-reader-mcp && bun scripts/public-proof.ts

# Iris
cd image-reader-mcp && bun scripts/public-proof.ts && bun scripts/release-gate.ts

# Cue
cd video-reader-mcp && bun scripts/public-proof.ts && bun scripts/release-gate.ts

# Prism
cd smart-reader-mcp && bun scripts/public-proof.ts && bun scripts/release-gate.ts

# Spine
cd architecture-reader-mcp && bun run build:rust && bun scripts/release-gate.ts && bun scripts/benchmark-public-proof.ts

# Lookout
cd lookout && bun scripts/public-proof.ts && bun scripts/release-gate.ts
```

Artifacts land in each repo’s `benchmark-artifacts/` (product CI/tags own ship truth).

## Continuous publication residual

Publishing peer-beating benches to a public site/dashboard is **Phase C residual**
(scripts exist; continuous publish pipeline not claimed Done).
