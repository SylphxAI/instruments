#!/usr/bin/env bun
/** Validate each product server.json has brand title and npm package identity. */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const base = existsSync('/home/codex/src/github.com/SylphxAI/pdf-reader-mcp')
  ? '/home/codex/src/github.com/SylphxAI'
  : join(import.meta.dir, '../..');

const expected = [
  { brand: 'Citra', repo: 'pdf-reader-mcp', titleRe: /citra/i, pkgRe: /pdf-reader-mcp/i },
  { brand: 'Iris', repo: 'image-reader-mcp', titleRe: /iris/i, pkgRe: /image-reader-mcp/i },
  { brand: 'Cue', repo: 'video-reader-mcp', titleRe: /cue/i, pkgRe: /video-reader-mcp/i },
  { brand: 'Prism', repo: 'smart-reader-mcp', titleRe: /prism/i, pkgRe: /smart-reader-mcp/i },
  { brand: 'Spine', repo: 'architecture-reader-mcp', titleRe: /spine/i, pkgRe: /architecture-reader-mcp/i },
  { brand: 'Lookout', repo: 'lookout', titleRe: /lookout/i, pkgRe: /lookout/i },
] as const;

const rows = [];
for (const e of expected) {
  const path = join(base, e.repo, 'server.json');
  if (!existsSync(path)) {
    rows.push({ brand: e.brand, repo: e.repo, ok: false, error: 'missing server.json' });
    continue;
  }
  const raw = readFileSync(path, 'utf8');
  let j: any;
  try {
    j = JSON.parse(raw);
  } catch (err) {
    rows.push({ brand: e.brand, repo: e.repo, ok: false, error: `invalid json: ${err}` });
    continue;
  }
  const blob = JSON.stringify(j);
  const title =
    j.title || j.name || j.serverInfo?.name || j.server?.name || '';
  const packages = JSON.stringify(j.packages ?? j.package ?? j);
  const titleOk = e.titleRe.test(String(title)) || e.titleRe.test(blob);
  const pkgOk = e.pkgRe.test(packages) || e.pkgRe.test(blob);
  rows.push({
    brand: e.brand,
    repo: e.repo,
    ok: titleOk && pkgOk,
    title: String(title),
    titleOk,
    pkgOk,
    keys: Object.keys(j).slice(0, 12),
  });
}

const report = {
  generatedAt: new Date().toISOString(),
  products: rows,
  ok: rows.every((r) => r.ok),
  note: 'Marketplace listing registration is still per-repo external step (Phase C residual).',
};
const outDir = join(import.meta.dir, '../benchmark-artifacts');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'family_marketplace_server_json.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
process.exit(report.ok ? 0 : 1);
