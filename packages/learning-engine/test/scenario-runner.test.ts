/**
 * Runner da suíte de cenários (ADR-4).
 *
 * Os arquivos em test/scenarios/*.json são a especificação de
 * comportamento do motor, em formato neutro de linguagem: a porta C#
 * do backend DEVE executar exatamente os mesmos arquivos com os
 * mesmos resultados. Mudou o motor → muda um cenário, nunca só o código.
 *
 * Convenção de tempo: "atDay"/"dueAtDay" são dias inteiros a partir
 * da época 0 (dia N = N * 86_400_000 ms).
 */

import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

import {
  DEFAULT_PARAMS,
  buildDailyMission,
  onReview,
  onUnderstood,
  snapshotNode,
  type ClaimState,
  type EngineParams,
} from '../src/index.ts';

const DAY_MS = 24 * 60 * 60 * 1000;
const day = (n: number) => n * DAY_MS;

interface Scenario {
  name: string;
  description?: string;
  params?: Partial<EngineParams>;
  steps: Step[];
}

type Step =
  | { type: 'understood'; claimId: string; nodeId: string; atDay: number }
  | { type: 'nodeUnderstood'; nodeId: string }
  | { type: 'review'; claimId: string; correct: boolean; atDay: number }
  | {
      type: 'assertClaim';
      claimId: string;
      expect: {
        stage?: string;
        intervalIndex?: number;
        dueAtDay?: number;
        consecutiveFailures?: number;
        atRisk?: boolean;
      };
    }
  | {
      type: 'assertNode';
      nodeId: string;
      expect: {
        state?: string;
        regressing?: boolean;
        dominatedClaims?: number;
        atRiskClaims?: number;
      };
    }
  | {
      type: 'assertMission';
      input: {
        nextLessonId: string | null;
        lastActivityAtDay: number | null;
        atDay: number;
      };
      expect: {
        rescue?: boolean;
        lessonSlot?: string | null;
        reviewCount?: number;
        allDoubleXp?: boolean;
      };
    };

const scenariosDir = join(
  dirname(fileURLToPath(import.meta.url)),
  'scenarios',
);

const files = readdirSync(scenariosDir).filter((f) => f.endsWith('.json'));

describe('suíte de cenários do motor', () => {
  for (const file of files) {
    const scenario: Scenario = JSON.parse(
      readFileSync(join(scenariosDir, file), 'utf-8'),
    );

    it(`${file}: ${scenario.name}`, () => {
      const params: EngineParams = { ...DEFAULT_PARAMS, ...scenario.params };
      const claims = new Map<string, ClaimState>();
      const understoodNodes = new Set<string>();

      for (const step of scenario.steps) {
        switch (step.type) {
          case 'understood': {
            claims.set(
              step.claimId,
              onUnderstood(step.claimId, step.nodeId, day(step.atDay), params),
            );
            break;
          }
          case 'nodeUnderstood': {
            understoodNodes.add(step.nodeId);
            break;
          }
          case 'review': {
            const current = claims.get(step.claimId);
            if (!current) throw new Error(`claim desconhecido: ${step.claimId}`);
            claims.set(
              step.claimId,
              onReview(
                current,
                { claimId: step.claimId, correct: step.correct, at: day(step.atDay) },
                params,
              ),
            );
            break;
          }
          case 'assertClaim': {
            const s = claims.get(step.claimId);
            if (!s) throw new Error(`claim desconhecido: ${step.claimId}`);
            if (step.expect.stage !== undefined)
              expect(s.stage, `${step.claimId}.stage`).toBe(step.expect.stage);
            if (step.expect.intervalIndex !== undefined)
              expect(s.intervalIndex, `${step.claimId}.intervalIndex`).toBe(
                step.expect.intervalIndex,
              );
            if (step.expect.dueAtDay !== undefined)
              expect(s.dueAt, `${step.claimId}.dueAt`).toBe(
                day(step.expect.dueAtDay),
              );
            if (step.expect.consecutiveFailures !== undefined)
              expect(
                s.consecutiveFailures,
                `${step.claimId}.consecutiveFailures`,
              ).toBe(step.expect.consecutiveFailures);
            if (step.expect.atRisk !== undefined)
              expect(s.atRisk, `${step.claimId}.atRisk`).toBe(step.expect.atRisk);
            break;
          }
          case 'assertNode': {
            const snap = snapshotNode(
              step.nodeId,
              understoodNodes.has(step.nodeId),
              [...claims.values()],
              params,
            );
            if (step.expect.state !== undefined)
              expect(snap.state, `${step.nodeId}.state`).toBe(step.expect.state);
            if (step.expect.regressing !== undefined)
              expect(snap.regressing, `${step.nodeId}.regressing`).toBe(
                step.expect.regressing,
              );
            if (step.expect.dominatedClaims !== undefined)
              expect(snap.dominatedClaims).toBe(step.expect.dominatedClaims);
            if (step.expect.atRiskClaims !== undefined)
              expect(snap.atRiskClaims).toBe(step.expect.atRiskClaims);
            break;
          }
          case 'assertMission': {
            const nodeIds = new Set(
              [...claims.values()].map((c) => c.nodeId),
            );
            const snapshots = [...nodeIds].map((nodeId) =>
              snapshotNode(
                nodeId,
                understoodNodes.has(nodeId),
                [...claims.values()],
                params,
              ),
            );
            const mission = buildDailyMission(
              {
                nextLessonId: step.input.nextLessonId,
                claimStates: [...claims.values()],
                nodeSnapshots: snapshots,
                lastActivityAt:
                  step.input.lastActivityAtDay === null
                    ? null
                    : day(step.input.lastActivityAtDay),
                now: day(step.input.atDay),
              },
              params,
            );
            if (step.expect.rescue !== undefined)
              expect(mission.rescue, 'mission.rescue').toBe(step.expect.rescue);
            if (step.expect.lessonSlot !== undefined)
              expect(mission.lessonSlot, 'mission.lessonSlot').toBe(
                step.expect.lessonSlot,
              );
            if (step.expect.reviewCount !== undefined)
              expect(mission.reviewSlot.length, 'reviewCount').toBe(
                step.expect.reviewCount,
              );
            if (step.expect.allDoubleXp !== undefined)
              expect(
                mission.reviewSlot.every((i) => i.doubleXp),
                'allDoubleXp',
              ).toBe(step.expect.allDoubleXp);
            break;
          }
        }
      }
    });
  }
});
