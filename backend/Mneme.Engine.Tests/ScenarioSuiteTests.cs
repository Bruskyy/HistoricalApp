// Runner C# da suíte de cenários compartilhada (ADR-4).
// Lê exatamente os mesmos arquivos JSON que a suíte TypeScript
// (packages/learning-engine/test/scenarios) e deve produzir os mesmos
// resultados. Divergência = teste vermelho, nunca bug silencioso.

using System.Text.Json;
using Mneme.Api.Engine;
using Xunit;

namespace Mneme.Engine.Tests;

public class ScenarioSuiteTests
{
    private const long DayMs = 24L * 60 * 60 * 1000;
    private static long Day(double n) => (long)(n * DayMs);

    public static TheoryData<string> ScenarioFiles()
    {
        var data = new TheoryData<string>();
        foreach (var f in Directory.GetFiles(ScenariosDir(), "*.json").OrderBy(x => x))
            data.Add(Path.GetFileName(f));
        return data;
    }

    private static string ScenariosDir()
    {
        var dir = new DirectoryInfo(AppContext.BaseDirectory);
        while (dir is not null)
        {
            var candidate = Path.Combine(
                dir.FullName, "packages", "learning-engine", "test", "scenarios");
            if (Directory.Exists(candidate)) return candidate;
            dir = dir.Parent;
        }
        throw new DirectoryNotFoundException(
            "suíte compartilhada não encontrada (packages/learning-engine/test/scenarios)");
    }

    [Theory]
    [MemberData(nameof(ScenarioFiles))]
    public void Scenario(string file)
    {
        using var doc = JsonDocument.Parse(
            File.ReadAllText(Path.Combine(ScenariosDir(), file)));
        var root = doc.RootElement;

        var p = EngineParams.Default; // nenhum cenário atual sobrescreve params
        var claims = new Dictionary<string, ClaimState>();
        var understoodNodes = new HashSet<string>();

        foreach (var step in root.GetProperty("steps").EnumerateArray())
        {
            var type = step.GetProperty("type").GetString();
            switch (type)
            {
                case "understood":
                {
                    var id = step.GetProperty("claimId").GetString()!;
                    claims[id] = Srs.OnUnderstood(
                        id,
                        step.GetProperty("nodeId").GetString()!,
                        Day(step.GetProperty("atDay").GetDouble()),
                        p);
                    break;
                }
                case "nodeUnderstood":
                    understoodNodes.Add(step.GetProperty("nodeId").GetString()!);
                    break;
                case "review":
                {
                    var id = step.GetProperty("claimId").GetString()!;
                    claims[id] = Srs.OnReview(
                        claims[id],
                        new ReviewOutcome(
                            id,
                            step.GetProperty("correct").GetBoolean(),
                            Day(step.GetProperty("atDay").GetDouble())),
                        p);
                    break;
                }
                case "assertClaim":
                {
                    var s = claims[step.GetProperty("claimId").GetString()!];
                    var expect = step.GetProperty("expect");
                    if (expect.TryGetProperty("stage", out var stage))
                        Assert.Equal(stage.GetString(), s.Stage.ToString().ToLowerInvariant());
                    if (expect.TryGetProperty("intervalIndex", out var ii))
                        Assert.Equal(ii.GetInt32(), s.IntervalIndex);
                    if (expect.TryGetProperty("dueAtDay", out var due))
                        Assert.Equal(Day(due.GetDouble()), s.DueAt);
                    if (expect.TryGetProperty("consecutiveFailures", out var cf))
                        Assert.Equal(cf.GetInt32(), s.ConsecutiveFailures);
                    if (expect.TryGetProperty("atRisk", out var ar))
                        Assert.Equal(ar.GetBoolean(), s.AtRisk);
                    break;
                }
                case "assertNode":
                {
                    var nodeId = step.GetProperty("nodeId").GetString()!;
                    var snap = NodeStateAggregator.SnapshotNode(
                        nodeId, understoodNodes.Contains(nodeId), claims.Values, p);
                    var expect = step.GetProperty("expect");
                    if (expect.TryGetProperty("state", out var st))
                        Assert.Equal(st.GetString(), snap.State.ToString().ToLowerInvariant());
                    if (expect.TryGetProperty("regressing", out var rg))
                        Assert.Equal(rg.GetBoolean(), snap.Regressing);
                    if (expect.TryGetProperty("dominatedClaims", out var dc))
                        Assert.Equal(dc.GetInt32(), snap.DominatedClaims);
                    if (expect.TryGetProperty("atRiskClaims", out var arc))
                        Assert.Equal(arc.GetInt32(), snap.AtRiskClaims);
                    break;
                }
                case "assertMission":
                {
                    var input = step.GetProperty("input");
                    var nodeIds = claims.Values.Select(c => c.NodeId).Distinct();
                    var snapshots = nodeIds
                        .Select(n => NodeStateAggregator.SnapshotNode(
                            n, understoodNodes.Contains(n), claims.Values, p))
                        .ToList();

                    var lastActivity = input.GetProperty("lastActivityAtDay");
                    var mission = MissionBuilder.BuildDailyMission(new MissionInput
                    {
                        NextLessonId = input.GetProperty("nextLessonId").GetString(),
                        ClaimStates = claims.Values.ToList(),
                        NodeSnapshots = snapshots,
                        LastActivityAt = lastActivity.ValueKind == JsonValueKind.Null
                            ? null
                            : Day(lastActivity.GetDouble()),
                        Now = Day(input.GetProperty("atDay").GetDouble()),
                    }, p);

                    var expect = step.GetProperty("expect");
                    if (expect.TryGetProperty("rescue", out var rs))
                        Assert.Equal(rs.GetBoolean(), mission.Rescue);
                    if (expect.TryGetProperty("lessonSlot", out var ls))
                        Assert.Equal(
                            ls.ValueKind == JsonValueKind.Null ? null : ls.GetString(),
                            mission.LessonSlot);
                    if (expect.TryGetProperty("reviewCount", out var rc))
                        Assert.Equal(rc.GetInt32(), mission.ReviewSlot.Count);
                    if (expect.TryGetProperty("allDoubleXp", out var adx))
                        Assert.Equal(adx.GetBoolean(), mission.ReviewSlot.All(i => i.DoubleXp));
                    break;
                }
                default:
                    throw new InvalidOperationException($"passo desconhecido: {type}");
            }
        }
    }
}
