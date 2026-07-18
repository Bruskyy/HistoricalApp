// API mínima do Mneme — decisão "jogável primeiro" (diretriz do fundador):
// sem banco, sem auth por enquanto. Progresso anônimo por deviceId em
// memória — coerente com o onboarding do produto, que joga antes de criar
// conta (PRD RF-01). Persistência/Postgres e login entram quando houver
// usuários reais para justificá-los; o formato dos eventos já é o do log
// append-only do ARCH ADR-3, então a troca do store não muda o contrato.

using System.Collections.Concurrent;
using Mneme.Api.Engine;

var builder = WebApplication.CreateBuilder(args);
builder.Services.ConfigureHttpJsonOptions(o =>
    o.SerializerOptions.Converters.Add(
        new System.Text.Json.Serialization.JsonStringEnumConverter(
            System.Text.Json.JsonNamingPolicy.CamelCase)));
var app = builder.Build();

var store = new ConcurrentDictionary<string, UserProgress>();

app.MapGet("/healthz", () => Results.Ok(new { ok = true }));

// Log de eventos de aprendizado (append-only; ingestão idempotente por eventId).
app.MapPost("/v1/events", (LearningEventBatch batch) =>
{
    if (string.IsNullOrWhiteSpace(batch.DeviceId))
        return Results.BadRequest(new { error = "deviceId obrigatório" });

    var progress = store.GetOrAdd(batch.DeviceId, _ => new UserProgress());
    var applied = 0;

    lock (progress)
    {
        foreach (var e in batch.Events)
        {
            if (!progress.SeenEventIds.Add(e.EventId)) continue; // idempotência
            applied++;
            progress.LastActivityAt = Math.Max(progress.LastActivityAt ?? 0, e.At);

            switch (e.Type)
            {
                case "claim_understood":
                    progress.Claims[e.ClaimId!] =
                        Srs.OnUnderstood(e.ClaimId!, e.NodeId!, e.At, EngineParams.Default);
                    break;
                case "node_understood":
                    progress.UnderstoodNodes.Add(e.NodeId!);
                    break;
                case "review_answered":
                    if (progress.Claims.TryGetValue(e.ClaimId!, out var current))
                        progress.Claims[e.ClaimId!] = Srs.OnReview(
                            current,
                            new ReviewOutcome(e.ClaimId!, e.Correct ?? false, e.At),
                            EngineParams.Default);
                    break;
            }
        }
    }

    return Results.Ok(new { applied });
});

// Missão do dia (GDD §3.1) calculada pelo mesmo motor validado pela suíte.
app.MapGet("/v1/mission", (string deviceId, string? nextLessonId) =>
{
    var progress = store.GetOrAdd(deviceId, _ => new UserProgress());
    lock (progress)
    {
        var now = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        var claimStates = progress.Claims.Values.ToList();
        var snapshots = claimStates
            .Select(c => c.NodeId).Distinct()
            .Select(n => NodeStateAggregator.SnapshotNode(
                n, progress.UnderstoodNodes.Contains(n), claimStates, EngineParams.Default))
            .ToList();

        var mission = MissionBuilder.BuildDailyMission(new MissionInput
        {
            NextLessonId = nextLessonId,
            ClaimStates = claimStates,
            NodeSnapshots = snapshots,
            LastActivityAt = progress.LastActivityAt,
            Now = now,
        }, EngineParams.Default);

        return Results.Ok(new { mission, nodes = snapshots });
    }
});

app.Run();

sealed class UserProgress
{
    public Dictionary<string, ClaimState> Claims { get; } = [];
    public HashSet<string> UnderstoodNodes { get; } = [];
    public HashSet<string> SeenEventIds { get; } = [];
    public long? LastActivityAt { get; set; }
}

record LearningEvent(
    string EventId, string Type, long At,
    string? ClaimId, string? NodeId, bool? Correct);

record LearningEventBatch(string DeviceId, List<LearningEvent> Events);
