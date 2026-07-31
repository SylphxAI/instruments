#!/usr/bin/env bash
# Honest Phase A surface checklist across independent product repos.
set -euo pipefail
if [[ -d /home/codex/src/github.com/SylphxAI/pdf-reader-mcp ]]; then
  BASE=/home/codex/src/github.com/SylphxAI
else
  BASE="$(cd "$(dirname "$0")/../.." && pwd)"
fi

fail=0
check_repo() {
  local brand="$1" repo="$2" skill="$3" bin_hint="$4"
  local dir="$BASE/$repo"
  echo "==== $brand ($repo) ===="
  if [[ ! -d "$dir" ]]; then
    echo "  MISSING checkout"
    fail=1
    return
  fi
  local ok=1
  for f in package.json server.json README.md; do
    if [[ ! -f "$dir/$f" ]]; then echo "  miss $f"; ok=0; fi
  done
  if [[ ! -f "$dir/skills/$skill/SKILL.md" ]]; then echo "  miss skills/$skill/SKILL.md"; ok=0; fi
  if [[ ! -f "$dir/docs/BRAND_PUBLISH.md" ]]; then echo "  miss docs/BRAND_PUBLISH.md"; ok=0; fi
  if [[ ! -f "$dir/scripts/brand-pack-plan.ts" ]]; then echo "  miss scripts/brand-pack-plan.ts"; ok=0; fi
  if [[ ! -f "$dir/scripts/release-gate.ts" && ! -f "$dir/scripts/sota-release-gate.ts" ]]; then
    echo "  miss release-gate script"
    ok=0
  fi
  if ! rg -q "$bin_hint" "$dir/package.json" 2>/dev/null && ! rg -q "\"$bin_hint\"" "$dir"/packages/*/package.json 2>/dev/null; then
    # spine may use bin/spine without package bin at root
    if [[ ! -f "$dir/bin/$bin_hint" ]]; then
      echo "  miss brand bin hint $bin_hint"
      ok=0
    fi
  fi
  if [[ $ok -eq 1 ]]; then echo "  Phase A surfaces: OK"; else echo "  Phase A surfaces: GAPS"; fail=1; fi
}

check_repo Citra pdf-reader-mcp citra citra
check_repo Iris image-reader-mcp iris iris
check_repo Cue video-reader-mcp cue cue
check_repo Prism smart-reader-mcp prism prism
check_repo Spine architecture-reader-mcp spine spine
check_repo Lookout lookout lookout lookout

if [[ $fail -ne 0 ]]; then
  echo "PHASE_A_CHECK=FAIL"
  exit 1
fi
echo "PHASE_A_CHECK=PASS"
