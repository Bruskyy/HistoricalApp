/**
 * Montagem da missão diária — GDD §3.1, §6.3.
 * Regras de humanidade: teto diário, prioridade por risco, resgate
 * curto e generoso após ausência (reencontro, não cobrança).
 */

import { dueClaims } from './srs';
import type {
  ClaimState,
  DailyMission,
  EngineParams,
  NodeSnapshot,
  ReviewMissionItem,
} from './types';

const DAY_MS = 24 * 60 * 60 * 1000;

export interface MissionInput {
  /** Próxima lição da jornada ativa (null se a jornada acabou). */
  nextLessonId: string | null;
  claimStates: ClaimState[];
  nodeSnapshots: NodeSnapshot[];
  /** Última atividade do usuário (epoch ms); null para usuário novo. */
  lastActivityAt: number | null;
  now: number;
}

export function buildDailyMission(
  input: MissionInput,
  params: EngineParams,
): DailyMission {
  const { claimStates, nodeSnapshots, now } = input;

  const regressingNodes = new Set(
    nodeSnapshots.filter((n) => n.regressing).map((n) => n.nodeId),
  );

  const due = dueClaims(claimStates, now);

  const absentDays =
    input.lastActivityAt === null
      ? 0
      : Math.floor((now - input.lastActivityAt) / DAY_MS);
  const rescue =
    input.lastActivityAt !== null && absentDays >= params.absenceDaysForRescue;

  const cap = rescue ? params.rescueMissionCap : params.dailyReviewCap;

  const items: ReviewMissionItem[] = due
    .map((c) => ({
      claimId: c.claimId,
      nodeId: c.nodeId,
      priority: priorityOf(c, regressingNodes.has(c.nodeId), now),
      doubleXp: regressingNodes.has(c.nodeId),
    }))
    .sort((a, b) => b.priority - a.priority)
    .slice(0, cap);

  return {
    // Em resgate, o reencontro é só revisão curta — a lição nova espera
    // o dia seguinte (GDD §6.3).
    lessonSlot: rescue ? null : input.nextLessonId,
    reviewSlot: items,
    rescue,
  };
}

/**
 * Prioridade: risco > nó em regressão > atraso.
 * O excedente do teto fica invisível — o usuário nunca vê dívida.
 */
function priorityOf(
  c: ClaimState,
  inRegressingNode: boolean,
  now: number,
): number {
  const overdueDays = Math.max(0, (now - c.dueAt) / DAY_MS);
  return (
    (c.atRisk ? 1000 : 0) +
    (inRegressingNode ? 500 : 0) +
    Math.min(overdueDays, 100)
  );
}
