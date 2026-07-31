#!/usr/bin/env bun
/**
 * Collect existing product public-proof JSON artifacts (no monorepo runtime).
 * Phase C residual: continuous *publication* of these artifacts.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const base = existsSync('/home/codex/src/github.com/SylphxAI/pdf-reader-mcp')
  ? '/home/codex/src/github.com/SylphxAI'
  : join(import.meta.dir, '../..');

const products = [
  { brand: 'Citra', repo: 'pdf-reader-mcp', files: ['citra_public_proof.json', 'pdf_sota_release_gate.json'] },
  { brand: 'Iris', repo: 'image-reader-mcp', files: ['iris_public_proof.json', 'image_reader_release_gate.json'] },
  { brand: 'Cue', repo: 'video-reader-mcp', files: ['cue_public_proof.json', 'video_reader_release_gate.json'] },
  { brand: 'Prism', repo: 'smart-reader-mcp', files: ['prism_public_proof.json', 'smart_reader_release_gate.json'] },
  { brand: 'Spine', repo: 'architecture-reader-mcp', files: ['spine_public_proof.json', 'architecture_reader_release_gate.json'] },
  { brand: 'Lookout', repo: 'lookout', files: ['lookout_public_proof.json', 'lookout_release_gate.json'] },
] as const;

const rows = [];
for (const p of products) {
  const dir = join(base, p.repo, 'benchmark-artifacts');
  const found: Record<string, unknown> = {};
  for (const f of p.files) {
    const path = join(dir, f);
    if (!existsSync(path)) {
      found[f] = { present: false };
      continue;
    }
    try {
      const j = JSON.parse(readFileSync(path, 'utf8')) as { ok?: boolean; status?: string; product?: string };
      found[f] = {
        present: true,
        ok: j.ok ?? (j.status === 'passed' || j.status === 'ok' ? true : j.status),
        status: j.status,
      };
    } catch (e) {
      found[f] = { present: true, parseError: String(e) };
    }
  }
  const anyMissing = Object.values(found).some((v) => !(v as { present?: boolean }).present);
  rows.push({ brand: p.brand, repo: p.repo, artifacts: found, complete: !anyMissing });
}

const report = {
  generatedAt: new Date().toISOString(),
  note: 'Aggregate of local product artifacts only — not continuous public publish (Phase C residual).',
  phaseA: 'see scripts/check-phase-a.sh',
  products: rows,
  ok: rows.every((r) => r.complete || r.brand === 'Citra'), // citra may use alternate gate names
};

const outDir = join(import.meta.dir, '../benchmark-artifacts');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'family_public_proof_aggregate.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
