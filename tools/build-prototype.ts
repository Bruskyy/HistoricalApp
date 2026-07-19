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

// Estantes só podem referenciar jornadas que existem no pacote
const journeyIds = new Set(pkg.journeys.map((j: { id: string }) => j.id));
for (const d of pkg.library.domains) {
  for (const sh of d.shelves ?? []) {
    for (const jid of sh.journeys ?? []) {
      if (!journeyIds.has(jid)) throw new Error(`estante ${sh.id} referencia jornada inexistente: ${jid}`);
    }
  }
}

// "</" dentro de strings JSON encerraria o <script>; escapa por segurança.
const safe = JSON.stringify(pkg).replace(/<\//g, '<\\/');

if (!template.includes('__PACKAGE_JSON__'))
  throw new Error('placeholder __PACKAGE_JSON__ não encontrado no template');

writeFileSync('prototype/first-session.html', template.replace('__PACKAGE_JSON__', safe));
console.log('✓ prototype/first-session.html gerado do conteúdo compilado');
