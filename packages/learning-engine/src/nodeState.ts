/**
 * Estado agregado do nó a partir dos estados das afirmações — LDD §6.
 * A regressão é silenciosa: nunca vira "perda" na interface, só a
 * missão de resgate é visível (GDD §6.2).
 */

import type { ClaimState, EngineParams, NodeSnapshot } from './types';

/**
 * @param understood o nó completou as lições da essência (evento de
 *   lição, fora do escopo do SRS — vem do log de eventos).
 */
export function snapshotNode(
  nodeId: string,
  understood: boolean,
  claims: ClaimState[],
  params: EngineParams,
): NodeSnapshot {
  const own = claims.filter((c) => c.nodeId === nodeId);
  const total = own.length;
  const dominated = own.filter((c) => c.stage === 'dominated').length;
  const atRisk = own.filter((c) => c.atRisk).length;

  const isDominated =
    understood && total > 0 && dominated / total >= params.nodeDominatedThreshold;

  const regressing =
    isDominated && total > 0 && atRisk / total >= params.nodeRegressionThreshold;

  return {
    nodeId,
    state: !understood ? 'visited' : isDominated ? 'dominated' : 'understood',
    regressing,
    totalClaims: total,
    dominatedClaims: dominated,
    atRiskClaims: atRisk,
  };
}
