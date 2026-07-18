// Porta C# de packages/learning-engine/src/nodeState.ts — LDD §6.
// A regressão é silenciosa: nunca vira "perda" na interface.

namespace Mneme.Api.Engine;

public static class NodeStateAggregator
{
    public static NodeSnapshot SnapshotNode(
        string nodeId, bool understood, IEnumerable<ClaimState> claims, EngineParams p)
    {
        var own = claims.Where(c => c.NodeId == nodeId).ToList();
        var total = own.Count;
        var dominated = own.Count(c => c.Stage == ClaimStage.Dominated);
        var atRisk = own.Count(c => c.AtRisk);

        var isDominated =
            understood && total > 0 && (double)dominated / total >= p.NodeDominatedThreshold;

        var regressing =
            isDominated && total > 0 && (double)atRisk / total >= p.NodeRegressionThreshold;

        return new NodeSnapshot
        {
            NodeId = nodeId,
            State = !understood ? NodeState.Visited
                : isDominated ? NodeState.Dominated
                : NodeState.Understood,
            Regressing = regressing,
            TotalClaims = total,
            DominatedClaims = dominated,
            AtRiskClaims = atRisk,
        };
    }
}
