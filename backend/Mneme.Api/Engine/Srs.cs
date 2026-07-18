// Porta C# de packages/learning-engine/src/srs.ts — GDD §6.2.
// Funções puras; semântica idêntica à versão TypeScript, verificada
// pela suíte de cenários compartilhada.

namespace Mneme.Api.Engine;

public static class Srs
{
    public const long DayMs = 24L * 60 * 60 * 1000;

    public static long Days(double n) => (long)(n * DayMs);

    /// <summary>Afirmação recém-compreendida numa lição — errar não muda o
    /// agendamento inicial; o custo do erro é zero (GDD §5.1).</summary>
    public static ClaimState OnUnderstood(string claimId, string nodeId, long at, EngineParams p)
    {
        var first = p.ReviewIntervalsDays.Length > 0 ? p.ReviewIntervalsDays[0] : 3;
        return new ClaimState
        {
            ClaimId = claimId,
            NodeId = nodeId,
            Stage = ClaimStage.Review,
            IntervalIndex = 0,
            DueAt = at + Days(first),
            ConsecutiveFailures = 0,
            AtRisk = false,
        };
    }

    public static ClaimState OnReview(ClaimState state, ReviewOutcome outcome, EngineParams p)
    {
        if (outcome.ClaimId != state.ClaimId)
            throw new ArgumentException($"outcome {outcome.ClaimId} aplicado ao claim {state.ClaimId}");
        return outcome.Correct ? OnCorrect(state, outcome.At, p) : OnWrong(state, outcome.At, p);
    }

    private static ClaimState OnCorrect(ClaimState s, long at, EngineParams p)
    {
        if (s.Stage == ClaimStage.Review)
        {
            var nextIndex = s.IntervalIndex + 1;
            if (nextIndex < p.ReviewIntervalsDays.Length)
            {
                // Ainda no funil de revisões (3d → 14d)
                return s with
                {
                    IntervalIndex = nextIndex,
                    DueAt = at + Days(p.ReviewIntervalsDays[nextIndex]),
                    ConsecutiveFailures = 0,
                };
            }
            // Sobreviveu a todas as revisões → Dominada, entra em manutenção
            return s with
            {
                Stage = ClaimStage.Dominated,
                IntervalIndex = 0,
                DueAt = at + Days(p.MaintenanceIntervalsDays.Length > 0 ? p.MaintenanceIntervalsDays[0] : 45),
                ConsecutiveFailures = 0,
                AtRisk = false,
            };
        }

        // Manutenção: intervalo cresce; risco é sanado pelo acerto.
        var idx = Math.Min(s.IntervalIndex + 1, p.MaintenanceIntervalsDays.Length - 1);
        return s with
        {
            IntervalIndex = idx,
            DueAt = at + Days(p.MaintenanceIntervalsDays[idx]),
            ConsecutiveFailures = 0,
            AtRisk = false,
        };
    }

    private static ClaimState OnWrong(ClaimState s, long at, EngineParams p)
    {
        if (s.Stage == ClaimStage.Review)
        {
            // Erro no funil: reapresenta amanhã, sem regredir o índice —
            // errar nunca custa progresso (Princípio Fundamental).
            return s with
            {
                DueAt = at + Days(1),
                ConsecutiveFailures = s.ConsecutiveFailures + 1,
            };
        }

        // Erro em manutenção: resgate curto; risco após N erros seguidos.
        var failures = s.ConsecutiveFailures + 1;
        return s with
        {
            IntervalIndex = 0,
            DueAt = at + Days(p.MaintenanceLapseDays),
            ConsecutiveFailures = failures,
            AtRisk = failures >= p.AtRiskAfterFailures,
        };
    }

    /// <summary>Afirmações devidas em <paramref name="now"/>, mais atrasada primeiro.</summary>
    public static List<ClaimState> DueClaims(IEnumerable<ClaimState> states, long now) =>
        states.Where(s => s.DueAt <= now).OrderBy(s => s.DueAt).ToList();
}
