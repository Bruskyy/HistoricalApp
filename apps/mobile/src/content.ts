/**
 * Tipos e carga do pacote de conteúdo compilado (tools/compile-content.ts).
 * Hoje o pacote vem no bundle; no futuro, do manifesto na CDN (ARCH §7)
 * — o formato é o mesmo, só muda a origem.
 */
import compiled from '../../../content/compiled/history.json';

export interface Source {
  type: string;
  ref: string;
}

export interface DebatePosition {
  view: string;
  acceptance: string;
}

export interface Claim {
  id: string;
  text: string;
  epistemicClass:
    | 'established_fact'
    | 'accepted_hypothesis'
    | 'historiographical_interpretation'
    | 'open_debate';
  consensusPct: number;
  sources: Source[];
  debate?: { question: string; positions: DebatePosition[] };
}

export interface Interaction {
  id: string;
  type:
    | 'causal'
    | 'counterfactual'
    | 'application'
    | 'causal_ordering'
    | 'connection'
    | 'source_interpretation'
    | 'situated_decision';
  claimId: string;
  objective: boolean;
  prompt: string;
  options?: string[];
  correct?: number;
  errorPath: string;
}

export interface CompiledLesson {
  id: string;
  title: string;
  hook: string;
  narrative: string[];
  interactions: Interaction[];
  connection: string;
}

export interface ContentNode {
  id: string;
  domain: string;
  era: string;
  name: string;
  sensitive: boolean;
  journeys: string[];
  claims: Claim[];
  connections: { to: string; type: string }[];
  lessons: CompiledLesson[];
}

export interface ContentPackage {
  compiledAt: string;
  nodes: ContentNode[];
}

export const historyPackage = compiled as unknown as ContentPackage;

export function nodeById(id: string): ContentNode {
  const node = historyPackage.nodes.find((n) => n.id === id);
  if (!node) throw new Error(`nó de conteúdo não encontrado: ${id}`);
  return node;
}
