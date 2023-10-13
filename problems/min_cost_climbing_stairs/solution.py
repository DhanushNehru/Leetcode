class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        cost_length = len(cost)
        for i in range(2, cost_length):
            # We can either start from the step with index 0 or the step with index 1.
            cost[i] += min(cost[i - 1], cost[i - 2])

        # Minimum cost to reach the top floor will be the minimum of the two sums at the last 2 steps.
        return min(cost[cost_length - 1], cost[cost_length - 2])