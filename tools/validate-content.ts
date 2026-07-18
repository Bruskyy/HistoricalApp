/**
 * Validador de conteúdo — mecanização do checklist do LDD §10 e das
 * regras da EDITORIAL_POLICY (PRD RF-12.2, RF-14.4).
 *
 * Uso: node --experimental-strip-types tools/validate-content.ts content
 * Sai com código 1 se qualquer nó reprovar. Roda em CI; PR de conteúdo
 * não passa sem este validador verde + aprovação do revisor especialista.
 */

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const EPISTEMIC_CLASSES = [
  'established_fact',
  'accepted_hypothesis',
  'historiographical_interpretation',
  'open_debate',
] as const;

const SOURCE_TYPES = [
  'academic_book',
  'peer_reviewed_article',
  'university_research',
  'primary_source',
  'reference_work',
] as const;

const INTERACTION_TYPES = [
  'causal',
  'counterfactual',
  'application',
  'causal_ordering',
  'connection',
  'source_interpretation',
  'situated_decision',
] as const;

/** Classes que NUNCA podem ser cobradas como pergunta objetiva (EDITORIAL_POLICY §3). */
const NON_OBJECTIVE_CLASSES = new Set([
  'historiographical_interpretation',
  'open_debate',
]);

interface Claim {
  id: string;
  text: string;
  epistemicClass: string;
  consensusPct: number;
  sources: { type: string; ref: string }[];
  debate?: { question: string; positions: { view: string }[] };
}

interface Interaction {
  id: string;
  type: string;
  claimId: string;
  objective: boolean;
  prompt: string;
  correct?: number;
  errorPath: string;
}

let failures = 0;

function fail(node: string, msg: string): void {
  failures++;
  console.error(`  ✗ [${node}] ${msg}`);
}

function validateNode(dir: string): void {
  const nodeFile = join(dir, 'node.json');
  const nodeId = dir.split('/').at(-1) ?? dir;

  if (!existsSync(nodeFile)) {
    fail(nodeId, 'node.json ausente');
    return;
  }

  const node = JSON.parse(readFileSync(nodeFile, 'utf-8'));

  // --- Metadados obrigatórios ---
  for (const field of ['id', 'domain', 'era', 'name', 'journeys', 'claims', 'lessons']) {
    if (node[field] === undefined) fail(nodeId, `campo obrigatório ausente: ${field}`);
  }
  if (typeof node.sensitive !== 'boolean')
    fail(nodeId, 'flag "sensitive" ausente ou não-booleana (LDD §8 exige decisão explícita)');
  if (!Array.isArray(node.connections) || node.connections.length === 0)
    fail(nodeId, 'nó sem conexões mapeadas (LDD: todo nó aponta para fora de si)');

  // --- Claims (EDITORIAL_POLICY §3-4) ---
  const claimIds = new Set<string>();
  for (const claim of (node.claims ?? []) as Claim[]) {
    claimIds.add(claim.id);
    if (!EPISTEMIC_CLASSES.includes(claim.epistemicClass as never))
      fail(nodeId, `claim ${claim.id}: classe epistêmica inválida "${claim.epistemicClass}"`);
    if (typeof claim.consensusPct !== 'number' || claim.consensusPct < 0 || claim.consensusPct > 100)
      fail(nodeId, `claim ${claim.id}: consensusPct fora de 0-100`);
    if (!claim.sources?.length)
      fail(nodeId, `claim ${claim.id}: sem fontes (nenhum claim publica sem fonte)`);
    for (const s of claim.sources ?? []) {
      if (!SOURCE_TYPES.includes(s.type as never))
        fail(nodeId, `claim ${claim.id}: tipo de fonte "${s.type}" fora da hierarquia (divulgação/blog não sustenta claim)`);
    }
    if (NON_OBJECTIVE_CLASSES.has(claim.epistemicClass) && !claim.debate?.positions?.length)
      fail(nodeId, `claim ${claim.id}: interpretação/debate sem as posições do debate ("quem defende / quem discorda / por quê")`);
  }

  // --- Lições ---
  const lessons = (node.lessons ?? []) as { id: string; file: string }[];
  if (lessons.length < 2 || lessons.length > 5)
    fail(nodeId, `nó com ${lessons.length} lição(ões) — LDD §1 pede 2-5`);

  const typesInNode = new Set<string>();

  for (const lesson of lessons) {
    const path = join(dir, lesson.file);
    if (!existsSync(path)) {
      fail(nodeId, `lição ${lesson.id}: arquivo ${lesson.file} não existe`);
      continue;
    }
    const md = readFileSync(path, 'utf-8');

    for (const heading of ['## Gancho', '## Narrativa', '## Interações', '## Conexão']) {
      if (!md.includes(heading))
        fail(nodeId, `lição ${lesson.id}: seção obrigatória ausente: ${heading} (anatomia LDD §3)`);
    }

    const block = md.match(/```json\s*\n([\s\S]*?)\n```/);
    if (!block) {
      fail(nodeId, `lição ${lesson.id}: bloco de interações (json) não encontrado`);
      continue;
    }

    let interactions: Interaction[];
    try {
      interactions = JSON.parse(block[1]!);
    } catch {
      fail(nodeId, `lição ${lesson.id}: JSON de interações inválido`);
      continue;
    }

    if (!interactions.some((i) => i.type === 'causal'))
      fail(nodeId, `lição ${lesson.id}: nenhuma pergunta causal (LDD §3 exige ≥1)`);

    let prevType: string | null = null;
    for (const i of interactions) {
      typesInNode.add(i.type);
      if (!INTERACTION_TYPES.includes(i.type as never))
        fail(nodeId, `lição ${lesson.id}: interação ${i.id} com tipo inválido "${i.type}"`);
      if (!i.errorPath?.trim())
        fail(nodeId, `lição ${lesson.id}: interação ${i.id} sem caminho do erro (LDD §3)`);
      if (i.claimId && !claimIds.has(i.claimId))
        fail(nodeId, `lição ${lesson.id}: interação ${i.id} referencia claim inexistente "${i.claimId}"`);
      if (i.type === prevType)
        fail(nodeId, `lição ${lesson.id}: interações consecutivas do mesmo tipo "${i.type}" (GDD §6.4)`);
      prevType = i.type;

      const claim = ((node.claims ?? []) as Claim[]).find((c) => c.id === i.claimId);
      if (claim && NON_OBJECTIVE_CLASSES.has(claim.epistemicClass) && i.objective)
        fail(
          nodeId,
          `lição ${lesson.id}: interação ${i.id} cobra "${claim.id}" (${claim.epistemicClass}) como pergunta objetiva — proibido (EDITORIAL_POLICY §3, LDD §7)`,
        );
      if (i.objective && i.correct === undefined)
        fail(nodeId, `lição ${lesson.id}: interação objetiva ${i.id} sem gabarito`);
    }
  }

  if (typesInNode.size < 3)
    fail(nodeId, `nó usa só ${typesInNode.size} tipo(s) de interação — LDD §7 pede ≥3`);
}

// --- main ---
const root = process.argv[2] ?? 'content';
const nodeDirs: string[] = [];

function walk(dir: string): void {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (!statSync(full).isDirectory()) continue;
    if (existsSync(join(full, 'node.json'))) nodeDirs.push(full);
    else walk(full);
  }
}

walk(root);

console.log(`Validando ${nodeDirs.length} nó(s) em ${root}/ ...`);
for (const dir of nodeDirs) validateNode(dir);

if (failures > 0) {
  console.error(`\n${failures} problema(s). Publicação bloqueada.`);
  process.exit(1);
}
console.log('✓ Todos os nós passaram no checklist mecânico (LDD §10 / EDITORIAL_POLICY).');
