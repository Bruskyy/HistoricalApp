// Porta C# de packages/learning-engine/src/mission.ts — GDD §3.1, §6.3.
// Teto diário, prioridade por risco, resgate curto após ausência.

namespace Mneme.Api.Engine;

public sealed record MissionInput
{
    public required string? NextLessonId { get; init; }
    public required IReadOnlyList<ClaimState> ClaimStates { get; init; }
    public required IReadOnlyList<NodeSnapshot> NodeSnapshots { get; init; }
    public required long? LastActivityAt { get; init; }
    public required long Now { get; init; }
}

public static class MissionBuilder
{
    public static DailyMission BuildDailyMission(MissionInput input, EngineParams p)
    {
        var regressingNodes = input.NodeSnapshots
            .Where(n => n.Regressing)
            .Select(n => n.NodeId)
            .ToHashSet();

        var due = Srs.DueClaims(input.ClaimStates, input.Now);

        var absentDays = input.LastActivityAt is null
            ? 0
            : (long)Math.Floor((double)(input.Now - input.LastActivityAt.Value) / Srs.DayMs);
        var rescue = input.LastActivityAt is not null && absentDays >= p.AbsenceDaysForRescue;

        var cap = rescue ? p.RescueMissionCap : p.DailyReviewCap;

        var items = due
            .Select(c => new ReviewMissionItem
            {
                ClaimId = c.ClaimId,
                NodeId = c.NodeId,
                Priority = PriorityOf(c, regressingNodes.Contains(c.NodeId), input.Now),
                DoubleXp = regressingNodes.Contains(c.NodeId),
            })
            .OrderByDescending(i => i.Priority) // estável, como o sort do JS
            .Take(cap)
            .ToList();

        return new DailyMission
        {
            // Em resgate, o reencontro é só revisão curta (GDD §6.3).
            LessonSlot = rescue ? null : input.NextLessonId,
            ReviewSlot = items,
            Rescue = rescue,
        };
    }

    /// <summary>Risco > nó em regressão > atraso. O excedente do teto fica invisível.</summary>
    private static double PriorityOf(ClaimState c, bool inRegressingNode, long now)
    {
        var overdueDays = Math.Max(0, (double)(now - c.DueAt) / Srs.DayMs);
        return (c.AtRisk ? 1000 : 0) + (inRegressingNode ? 500 : 0) + Math.Min(overdueDays, 100);
    }
}
