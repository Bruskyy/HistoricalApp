/**
 * Tipos do motor de aprendizado. Domínio-agnósticos por contrato
 * (VISION §5): nada aqui sabe o que é "história".
 *
 * Datas são epoch millis UTC; a conversão para o fuso do usuário é
 * responsabilidade da borda (app/API), nunca do motor.
 */

// ---------- Parâmetros de calibração (GDD Apêndice A) ----------
// Todos ajustáveis pelo servidor sem release (ARCH princípio 4).

export interface EngineParams {
  /** Intervalos (dias) das revisões até Dominada: [3, 14] */
  reviewIntervalsDays: number[];
  /** Intervalos (dias) de manutenção após Dominada: [45, 120, 300] */
  maintenanceIntervalsDays: number[];
  /** Intervalo (dias) após erro em manutenção */
  maintenanceLapseDays: number;
  /** Erros consecutivos em manutenção para marcar a afirmação em risco */
  atRiskAfterFailures: number;
  /** Fração de afirmações em risco que põe o nó em regressão (0.3) */
  nodeRegressionThreshold: number;
  /** Fração de afirmações Dominadas para o nó contar como Dominado (0.8) */
  nodeDominatedThreshold: number;
  /** Teto diário de afirmações em revisão (GDD §6.3) */
  dailyReviewCap: number;
  /** Tamanho máximo da missão de resgate pós-ausência */
  rescueMissionCap: number;
  /** Dias de ausência a partir dos quais o retorno usa missão de resgate */
  absenceDaysForRescue: number;
}

export const DEFAULT_PARAMS: EngineParams = {
  reviewIntervalsDays: [3, 14],
  maintenanceIntervalsDays: [45, 120, 300],
  maintenanceLapseDays: 7,
  atRiskAfterFailures: 2,
  nodeRegressionThreshold: 0.3,
  nodeDominatedThreshold: 0.8,
  dailyReviewCap: 15,
  rescueMissionCap: 10,
  absenceDaysForRescue: 21,
};

// ---------- Estado por afirmação (claim) ----------

/**
 * Ciclo de vida (GDD §6.2):
 * understood → (revisões 3d/14d) → dominated → manutenção crescente.
 * Erros em manutenção podem levar a atRisk; o nó agrega risco em regressão.
 */
export type ClaimStage = 'understood' | 'review' | 'dominated';

export interface ClaimState {
  claimId: string;
  nodeId: string;
  stage: ClaimStage;
  /** Índice na sequência de intervalos (de revisão ou manutenção). */
  intervalIndex: number;
  /** Próxima revisão devida (epoch ms). */
  dueAt: number;
  /** Erros consecutivos na fase atual. */
  consecutiveFailures: number;
  /** Afirmação em risco (GDD §6.2) — entra em missão de resgate. */
  atRisk: boolean;
}

// ---------- Estado por nó ----------

/** LDD §6. `master` fica fora do MVP do motor mas o tipo já reserva o valor. */
export type NodeState =
  | 'visited'
  | 'understood'
  | 'dominated'
  | 'master';

export interface NodeSnapshot {
  nodeId: string;
  state: NodeState;
  /** Nó Dominado cuja memória está se apagando (regressão silenciosa). */
  regressing: boolean;
  totalClaims: number;
  dominatedClaims: number;
  atRiskClaims: number;
}

// ---------- Eventos de aprendizado (ARCH ADR-3) ----------

/** Resultado de uma interação de revisão sobre uma afirmação. */
export interface ReviewOutcome {
  claimId: string;
  correct: boolean;
  /** Momento da resposta (epoch ms). */
  at: number;
}

// ---------- Missão diária (GDD §3.1) ----------

export interface ReviewMissionItem {
  claimId: string;
  nodeId: string;
  /** Prioridade decrescente; itens em risco primeiro. */
  priority: number;
  /** Vinda de nó em regressão → XP em dobro (GDD §3.2). */
  doubleXp: boolean;
}

export interface DailyMission {
  /** Slot 1 — próxima lição da jornada ativa (id opaco, resolvido pelo conteúdo). */
  lessonSlot: string | null;
  /** Slot 2 — revisões do dia, já limitadas ao teto e priorizadas. */
  reviewSlot: ReviewMissionItem[];
  /** Missão de resgate pós-ausência (substitui o slot 2 quando presente). */
  rescue: boolean;
}
