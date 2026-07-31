#!/usr/bin/env bun
/** Dry-run npm pack for each product package (no publish). */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const base = existsSync('/home/codex/src/github.com/SylphxAI/pdf-reader-mcp')
  ? '/home/codex/src/github.com/SylphxAI'
  : join(import.meta.dir, '../..');

const packages = [
  { brand: 'Citra', cwd: 'pdf-reader-mcp', name: '@sylphx/pdf-reader-mcp' },
  { brand: 'Iris', cwd: 'image-reader-mcp', name: '@sylphx/image-reader-mcp' },
  { brand: 'Cue', cwd: 'video-reader-mcp', name: '@sylphx/video-reader-mcp' },
  { brand: 'Prism', cwd: 'smart-reader-mcp', name: '@sylphx/smart-reader-mcp' },
  {
    brand: 'Spine',
    cwd: 'architecture-reader-mcp/packages/mcp-server',
    name: '@sylphx/architecture-reader-mcp',
  },
  { brand: 'Lookout', cwd: 'lookout', name: '@sylphx/lookout' },
] as const;

const rows = [];
for (const p of packages) {
  const dir = join(base, p.cwd);
  if (!existsSync(join(dir, 'package.json'))) {
    rows.push({ ...p, ok: false, error: 'missing package.json' });
    continue;
  }
  const r = spawnSync('npm', ['pack', '--dry-run'], { cwd: dir, encoding: 'utf8', timeout: 120_000 });
  const out = `${r.stdout ?? ''}\n${r.stderr ?? ''}`;
  const size = out.match(/package size:\s*([^\n]+)/i)?.[1]?.trim();
  const files = out.match(/total files:\s*(\d+)/i)?.[1];
  const filename = out.match(/filename:\s*(\S+)/i)?.[1];
  rows.push({
    brand: p.brand,
    name: p.name,
    cwd: p.cwd,
    ok: r.status === 0,
    exitCode: r.status,
    packageSize: size,
    totalFiles: files ? Number(files) : undefined,
    filename,
  });
}

const report = {
  generatedAt: new Date().toISOString(),
  products: rows,
  ok: rows.every((r) => r.ok),
  livePublishBlocker: 'npm automation token / 2FA for @sylphx scope (external)',
  note: 'Dry-run only — not a live publish. Phase C residual.',
};
const outDir = join(import.meta.dir, '../benchmark-artifacts');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'family_npm_pack_dry_run.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
process.exit(report.ok ? 0 : 1);
