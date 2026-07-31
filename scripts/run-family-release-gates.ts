#!/usr/bin/env bun
/** Run release-gates in sibling product repos when present; write aggregate. */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const base = existsSync('/home/codex/src/github.com/SylphxAI/pdf-reader-mcp')
  ? '/home/codex/src/github.com/SylphxAI'
  : join(import.meta.dir, '../..');

const products = [
  {
    brand: 'Citra',
    repo: 'pdf-reader-mcp',
    scripts: ['scripts/public-proof.ts', 'scripts/sota-release-gate.ts'],
  },
  { brand: 'Iris', repo: 'image-reader-mcp', scripts: ['scripts/release-gate.ts'] },
  { brand: 'Cue', repo: 'video-reader-mcp', scripts: ['scripts/release-gate.ts'] },
  { brand: 'Prism', repo: 'smart-reader-mcp', scripts: ['scripts/release-gate.ts'] },
  { brand: 'Spine', repo: 'architecture-reader-mcp', scripts: ['scripts/release-gate.ts'] },
  { brand: 'Lookout', repo: 'lookout', scripts: ['scripts/release-gate.ts'] },
] as const;

const rows = [];
for (const p of products) {
  const dir = join(base, p.repo);
  if (!existsSync(dir)) {
    rows.push({ brand: p.brand, repo: p.repo, status: 'missing_checkout', ok: false });
    continue;
  }
  let ran = false;
  for (const script of p.scripts) {
    if (!existsSync(join(dir, script))) continue;
    const started = performance.now();
    const r = spawnSync('bun', [script], { cwd: dir, encoding: 'utf8', timeout: 180_000 });
    const ms = performance.now() - started;
    const ok = r.status === 0;
    rows.push({
      brand: p.brand,
      repo: p.repo,
      script,
      exitCode: r.status,
      ok,
      ms,
      stderrTail: (r.stderr || '').slice(-240),
    });
    ran = true;
    if (ok) break; // success on first available gate/proof
  }
  if (!ran) {
    rows.push({ brand: p.brand, repo: p.repo, status: 'missing_gate_script', ok: false });
  }
}

// Per brand: at least one ok row
const brands = [...new Set(rows.map((r) => r.brand))];
const brandOk = brands.every((b) => rows.some((r) => r.brand === b && r.ok === true));

const report = {
  generatedAt: new Date().toISOString(),
  products: rows,
  brandOk,
  ok: brandOk,
  note: 'Local gate/proof aggregate only — not continuous public publish (Phase C residual).',
};
const outDir = join(import.meta.dir, '../benchmark-artifacts');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'family_release_gate_aggregate.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
process.exit(report.ok ? 0 : 1);
