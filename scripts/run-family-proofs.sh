#!/usr/bin/env bash
# Run each product public-proof/release-gate when sibling checkouts exist.
# Instruments is docs-only; this is runbook automation, not monorepo coupling.
set -euo pipefail
if [[ -d "$(cd "$(dirname "$0")/../.." && pwd)/pdf-reader-mcp" ]]; then
  BASE="$(cd "$(dirname "$0")/../.." && pwd)"
elif [[ -d /home/codex/src/github.com/SylphxAI/pdf-reader-mcp ]]; then
  BASE=/home/codex/src/github.com/SylphxAI
else
  BASE="$(cd "$(dirname "$0")/../.." && pwd)"
fi

run_one() {
  local name="$1"
  local dir="$BASE/$name"
  if [[ ! -d "$dir" ]]; then
    echo "[skip] $name (missing $dir)"
    return 0
  fi
  echo "==== $name ===="
  (
    cd "$dir"
    if [[ -f scripts/public-proof.ts ]]; then
      bun scripts/public-proof.ts || true
    fi
    if [[ -f scripts/release-gate.ts ]]; then
      bun scripts/release-gate.ts || true
    elif [[ -f scripts/benchmark-public-proof.ts ]]; then
      bun scripts/benchmark-public-proof.ts || true
    fi
  )
}

run_one pdf-reader-mcp
run_one image-reader-mcp
run_one video-reader-mcp
run_one smart-reader-mcp
run_one architecture-reader-mcp
run_one lookout
echo "==== family proofs finished ===="
