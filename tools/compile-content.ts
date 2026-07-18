/**
 * Compilador de conteúdo (semente do pipeline do ARCH §7 / E3.4).
 *
 * Lê os nós de autoria (node.json + lições em Markdown estruturado) e
 * emite um pacote JSON único por domínio, pronto para ser consumido
 * pelo app (bundle local hoje; Blob/CDN no futuro — o formato de
 * saída é o contrato).
 *
 * Uso: node --experimental-strip-types tools/compile-content.ts content out
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

interface CompiledLesson {
  id: string;
  title: string;
  hook: string;
  narrative: string[];
  interactions: unknown[];
  connection: string;
}

function section(md: string, name: string): string {
  const re = new RegExp(`## ${name}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`);
  const m = md.match(re);
  return (m?.[1] ?? '').trim();
}

function compileLesson(dir: string, lesson: { id: string; file: string }): CompiledLesson {
  const md = readFileSync(join(dir, lesson.file), 'utf-8');
  const title = md.match(/^# (.+)$/m)?.[1] ?? lesson.id;

  const narrativeRaw = section(md, 'Narrativa');
  const narrative = narrativeRaw
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const interBlock = section(md, 'Interações').match(/```json\s*\n([\s\S]*?)\n```/);
  const interactions = interBlock ? JSON.parse(interBlock[1]!) : [];

  return {
    id: lesson.id,
    title,
    hook: section(md, 'Gancho'),
    narrative,
    interactions,
    connection: section(md, 'Conexão'),
  };
}

function compileDomain(root: string): Record<string, unknown> {
  const nodes: unknown[] = [];

  function walk(dir: string): void {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (!statSync(full).isDirectory()) continue;
      if (existsSync(join(full, 'node.json'))) {
        const node = JSON.parse(readFileSync(join(full, 'node.json'), 'utf-8'));
        node.lessons = (node.lessons as { id: string; file: string }[]).map((l) =>
          compileLesson(full, l),
        );
        nodes.push(node);
      } else {
        walk(full);
      }
    }
  }

  walk(join(root, 'nodes'));

  const journeys: unknown[] = [];
  const journeysDir = join(root, 'journeys');
  if (existsSync(journeysDir)) {
    for (const f of readdirSync(journeysDir).filter((f) => f.endsWith('.json'))) {
      journeys.push(JSON.parse(readFileSync(join(journeysDir, f), 'utf-8')));
    }
  }

  const glossaryFile = join(root, 'glossary.json');
  const glossary = existsSync(glossaryFile)
    ? JSON.parse(readFileSync(glossaryFile, 'utf-8'))
    : [];

  return { compiledAt: new Date().toISOString().slice(0, 10), glossary, journeys, nodes };
}

const contentRoot = process.argv[2] ?? 'content';
const outDir = process.argv[3] ?? join(contentRoot, 'compiled');
mkdirSync(outDir, { recursive: true });

for (const domain of readdirSync(contentRoot)) {
  const domainDir = join(contentRoot, domain);
  if (!statSync(domainDir).isDirectory() || domain === 'compiled') continue;
  const pkg = compileDomain(domainDir);
  const out = join(outDir, `${domain}.json`);
  writeFileSync(out, JSON.stringify(pkg, null, 2));
  console.log(`✓ ${out} (${(pkg.nodes as unknown[]).length} nó/s)`);
}
