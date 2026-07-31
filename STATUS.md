# Instruments readiness (honest)

Last verified: 2026-07-31 (Helm extractor; Phase B residuals contract; pack dry-run PASS; Phase A PASS).
This is **portfolio knowledge**, not product release authority. Each product’s CI and tags own ship truth.

Master strategy + backlog: **[STRATEGY.md](./STRATEGY.md)**.

## Legend

| Level | Meaning |
| --- | --- |
| **Strong** | Brand + SDK + CLI + MCP + meaningful automated behavior tests on tip |
| **Partial** | Surfaces exist; depth or peer parity incomplete |
| **Scaffold** | Early / missing major surfaces |

## Matrix

| Brand | Repo | Surfaces | Public stars (approx) | Tip evidence | Residual vs bar |
| --- | --- | --- | --- | --- | --- |
| **Citra** | pdf-reader-mcp | Strong | **~875** | public-proof sample.pdf; skill sources API | Live `@sylphx/citra` needs npm auth |
| **Iris** | image-reader-mcp | Strong | early | **`950801a`**: OCR fixture + traineddata residual docs; tests **38** | Host multi-traineddata residual |
| **Cue** | video-reader-mcp | Strong | early | **`a537789`**: 30s install + ocr_frame + ASR honesty; tests **42** | Whisper depth when adapter present |
| **Prism** | smart-reader-mcp | Strong | early | **`b503f2b`**: mock e2e + expectedDelegation + 30s install docs; tests **56** | Live native e2e optional |
| **Spine** | architecture-reader-mcp | Strong | early | **`8ff8461`**: helm+k8s+tf+openapi+…; mermaid; public-proof; core **101**; gate **24/24** | Permanent non-goal: UA pan/zoom UX (PHASE_B_RESIDUALS) |
| **Lookout** | lookout | Strong/Partial | early | **`e20a698`**: sitemap seed; robots Allow; npm pack dry-run `@sylphx/lookout@0.1.0` | Live npm needs auth; not multi-GB browser |

Peer anchors (order of magnitude): Graphify ~100k, Understand-Anything ~77k, wigolo ~4k.

## What Instruments is

**Company product-family knowledge and positioning** (composable local-first instruments).
It is **not** a monorepo that ships product code, and product repos must **not** import
an `instruments` package or aliases farm. Composition is via public SDK/MCP contracts.

## Family rules (unchanged)

- One product = one GitHub repo (marketplace + stars)
- Composition via public SDK/MCP, not monorepo product code
- Evidence = result contract, not a tool name

## Phase status

**npm pack dry-run matrix** (`bun scripts/npm-pack-dry-run-matrix.ts`): **ok=True** for all six packages. Live publish still blocked on `@sylphx` npm auth.



- **Phase A surfaces:** landed + **`scripts/check-phase-a.sh` PASS** (all six products)
- **Phase B competitive depth:** **substantially landed** for agent-local bar; residuals documented in PHASE_B_RESIDUALS.md (UA dashboard permanent non-goal; tree-sitter clone residual; OCR/ASR host packs; continuous public benches → Phase C)
- **Phase C brand/growth:** open (npm auth external blocker for live brand publish)

## Archived (explicit)

- `filesystem-mcp` — archived
- `awesome-mcp-servers` — archived

## Not claimed complete

Equal SOTA peer parity across all six, formal live brand npm publishes (`@sylphx/citra`, …), and continuous *published* peer-beating benches remain **open**. Local aggregates: `bun scripts/aggregate-public-proofs.ts`, `bun scripts/run-family-release-gates.ts` (brandOk=True) → `benchmark-artifacts/family_public_proof_aggregate.json` (ok=True).
