// Porta C# do @mneme/learning-engine (packages/learning-engine/src/types.ts).
// ADR-4: o comportamento é fixado pela suíte compartilhada de cenários em
// packages/learning-engine/test/scenarios — qualquer divergência com a
// implementação TypeScript é um teste quebrado, nunca um bug silencioso.

namespace Mneme.Api.Engine;

/// <summary>Parâmetros de calibração (GDD Apêndice A) — ajustáveis sem release.</summary>
public sealed record EngineParams
{
    public required double[] ReviewIntervalsDays { get; init; }
    public required double[] MaintenanceIntervalsDays { get; init; }
    public required double MaintenanceLapseDays { get; init; }
    public required int AtRiskAfterFailures { get; init; }
    public required double NodeRegressionThreshold { get; init; }
    public required double NodeDominatedThreshold { get; init; }
    public required int DailyReviewCap { get; init; }
    public required int RescueMissionCap { get; init; }
    public required int AbsenceDaysForRescue { get; init; }

    public static readonly EngineParams Default = new()
    {
        ReviewIntervalsDays = [3, 14],
        MaintenanceIntervalsDays = [45, 120, 300],
        MaintenanceLapseDays = 7,
        AtRiskAfterFailures = 2,
        NodeRegressionThreshold = 0.3,
        NodeDominatedThreshold = 0.8,
        DailyReviewCap = 15,
        RescueMissionCap = 10,
        AbsenceDaysForRescue = 21,
    };
}

public enum ClaimStage { Understood, Review, Dominated }

/// <summary>Estado de uma afirmação no agendador (GDD §6.2). Tempos em epoch ms UTC.</summary>
public sealed record ClaimState
{
    public required string ClaimId { get; init; }
    public required string NodeId { get; init; }
    public required ClaimStage Stage { get; init; }
    public required int IntervalIndex { get; init; }
    public required long DueAt { get; init; }
    public required int ConsecutiveFailures { get; init; }
    public required bool AtRisk { get; init; }
}

public enum NodeState { Visited, Understood, Dominated, Master }

public sealed record NodeSnapshot
{
    public required string NodeId { get; init; }
    public required NodeState State { get; init; }
    public required bool Regressing { get; init; }
    public required int TotalClaims { get; init; }
    public required int DominatedClaims { get; init; }
    public required int AtRiskClaims { get; init; }
}

public sealed record ReviewOutcome(string ClaimId, bool Correct, long At);

public sealed record ReviewMissionItem
{
    public required string ClaimId { get; init; }
    public required string NodeId { get; init; }
    public required double Priority { get; init; }
    public required bool DoubleXp { get; init; }
}

public sealed record DailyMission
{
    public required string? LessonSlot { get; init; }
    public required IReadOnlyList<ReviewMissionItem> ReviewSlot { get; init; }
    public required bool Rescue { get; init; }
}
