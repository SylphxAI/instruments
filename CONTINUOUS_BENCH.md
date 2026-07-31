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

## Automated local runner

```bash
bash scripts/run-family-proofs.sh
```

Runs each sibling product proof/gate when those checkouts exist beside `instruments`.
Does **not** publish continuously (Phase C residual).

## Phase A surface audit

```bash
bash scripts/check-phase-a.sh
```


## Phase B tip snapshot

```bash
bash scripts/phase-b-snapshot.sh
```

Writes `benchmark-artifacts/phase_b_snapshot.json` with tip SHAs + Phase A line.

## Aggregate local proofs

```bash
bun scripts/aggregate-public-proofs.ts
```

Reads each product `benchmark-artifacts/*` into `family_public_proof_aggregate.json`.

## Family release-gate aggregate

```bash
bun scripts/run-family-release-gates.ts
```

Writes `benchmark-artifacts/family_release_gate_aggregate.json`.
