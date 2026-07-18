/**
 * Agendador de repetição espaçada por afirmação — GDD §6.2.
 * Funções puras: (estado, evento, params) → novo estado.
 * O mesmo comportamento deve valer na porta C# (ADR-4); qualquer
 * mudança aqui exige novo cenário em test/scenarios.
 */

import type { ClaimState, EngineParams, ReviewOutcome } from './types.ts';

const DAY_MS = 24 * 60 * 60 * 1000;

export function days(n: number): number {
  return n * DAY_MS;
}

/**
 * Afirmação recém-compreendida numa lição (caminho do acerto ou do erro —
 * errar não muda o agendamento inicial; o custo do erro é zero, GDD §5.1).
 */
export function onUnderstood(
  claimId: string,
  nodeId: string,
  at: number,
  params: EngineParams,
): ClaimState {
  const first = params.reviewIntervalsDays[0] ?? 3;
  return {
    claimId,
    nodeId,
    stage: 'review',
    intervalIndex: 0,
    dueAt: at + days(first),
    consecutiveFailures: 0,
    atRisk: false,
  };
}

/** Aplica o resultado de uma revisão. */
export function onReview(
  state: ClaimState,
  outcome: ReviewOutcome,
  params: EngineParams,
): ClaimState {
  if (outcome.claimId !== state.claimId) {
    throw new Error(
      `outcome ${outcome.claimId} aplicado ao claim ${state.claimId}`,
    );
  }
  return outcome.correct
    ? onCorrect(state, outcome.at, params)
    : onWrong(state, outcome.at, params);
}

function onCorrect(s: ClaimState, at: number, p: EngineParams): ClaimState {
  if (s.stage === 'review') {
    const nextIndex = s.intervalIndex + 1;
    if (nextIndex < p.reviewIntervalsDays.length) {
      // Ainda no funil de revisões (3d → 14d)
      return {
        ...s,
        intervalIndex: nextIndex,
        dueAt: at + days(p.reviewIntervalsDays[nextIndex]!),
        consecutiveFailures: 0,
      };
    }
    // Sobreviveu a todas as revisões → Dominada, entra em manutenção
    return {
      ...s,
      stage: 'dominated',
      intervalIndex: 0,
      dueAt: at + days(p.maintenanceIntervalsDays[0] ?? 45),
      consecutiveFailures: 0,
      atRisk: false,
    };
  }

  // Manutenção: intervalo cresce; risco é sanado pelo acerto.
  const nextIndex = Math.min(
    s.intervalIndex + 1,
    p.maintenanceIntervalsDays.length - 1,
  );
  return {
    ...s,
    intervalIndex: nextIndex,
    dueAt: at + days(p.maintenanceIntervalsDays[nextIndex]!),
    consecutiveFailures: 0,
    atRisk: false,
  };
}

function onWrong(s: ClaimState, at: number, p: EngineParams): ClaimState {
  if (s.stage === 'review') {
    // Erro no funil: reapresenta amanhã, sem regredir o índice —
    // errar nunca custa progresso (Princípio Fundamental).
    return {
      ...s,
      dueAt: at + days(1),
      consecutiveFailures: s.consecutiveFailures + 1,
    };
  }

  // Erro em manutenção: intervalo curto de resgate; risco após N seguidos.
  const failures = s.consecutiveFailures + 1;
  return {
    ...s,
    intervalIndex: 0,
    dueAt: at + days(p.maintenanceLapseDays),
    consecutiveFailures: failures,
    atRisk: failures >= p.atRiskAfterFailures,
  };
}

/** Afirmações devidas em `now`, mais atrasada primeiro. */
export function dueClaims(states: ClaimState[], now: number): ClaimState[] {
  return states
    .filter((s) => s.dueAt <= now)
    .sort((a, b) => a.dueAt - b.dueAt);
}
