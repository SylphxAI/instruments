#!/usr/bin/env bash
# Record tip SHAs and Phase A checker for honest STATUS refresh.
set -euo pipefail
BASE="${1:-/home/codex/src/github.com/SylphxAI}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/benchmark-artifacts"
mkdir -p "$OUT"
{
  echo "{"
  echo "  \"generatedAt\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\","
  echo "  \"phaseA\": \"$(bash "$(dirname "$0")/check-phase-a.sh" 2>/dev/null | tail -1 || echo FAIL)\","
  echo "  \"tips\": {"
  first=1
  for r in pdf-reader-mcp image-reader-mcp video-reader-mcp smart-reader-mcp architecture-reader-mcp lookout instruments; do
    if [[ -d "$BASE/$r/.git" ]]; then
      sha=$(git -C "$BASE/$r" rev-parse --short HEAD)
      [[ $first -eq 1 ]] || echo ","
      printf '    "%s": "%s"' "$r" "$sha"
      first=0
    fi
  done
  echo ""
  echo "  }"
  echo "}"
} | tee "$OUT/phase_b_snapshot.json"
