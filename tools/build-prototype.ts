/**
 * Gera prototype/first-session.html a partir do template + conteúdo
 * compilado. Todo nó novo que passar pelo pipeline editorial vira
 * jogável no protótipo sem tocar em código de player.
 *
 * Uso: node --experimental-strip-types tools/build-prototype.ts
 */
import { readFileSync, writeFileSync } from 'node:fs';

const template = readFileSync('prototype/template.html', 'utf-8');
const pkg = JSON.parse(readFileSync('content/compiled/history.json', 'utf-8'));
pkg.library = JSON.parse(readFileSync('content/library.json', 'utf-8'));

// Coleções só podem referenciar módulos que existem no pacote (LDD §1-2: Coleção → Módulo)
const moduleIds = new Set(
  pkg.journeys.filter((j: { kind?: string }) => j.kind === 'module').map((j: { id: string }) => j.id),
);
for (const d of pkg.library.domains) {
  for (const c of d.collections ?? []) {
    for (const mid of c.modules ?? []) {
      if (!moduleIds.has(mid)) throw new Error(`coleção ${c.id} referencia módulo inexistente: ${mid}`);
    }
  }
}

// Trilhas (LDD §2.2) só podem desbloquear atrás de coleções que existem
const collectionIds = new Set(
  pkg.library.domains.flatMap((d: { collections?: { id: string }[] }) => d.collections ?? []).map((c: { id: string }) => c.id),
);
for (const j of pkg.journeys) {
  if (j.kind === 'trail' && j.unlockAfterCollection && !collectionIds.has(j.unlockAfterCollection)) {
    throw new Error(`trilha ${j.id} referencia coleção inexistente: ${j.unlockAfterCollection}`);
  }
}

// "</" dentro de strings JSON encerraria o <script>; escapa por segurança.
const safe = JSON.stringify(pkg).replace(/<\//g, '<\\/');

if (!template.includes('__PACKAGE_JSON__'))
  throw new Error('placeholder __PACKAGE_JSON__ não encontrado no template');

writeFileSync('prototype/first-session.html', template.replace('__PACKAGE_JSON__', safe));
console.log('✓ prototype/first-session.html gerado do conteúdo compilado');
