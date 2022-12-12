/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let costLength = cost.length;
    for(let i=2;i<costLength;i++){
        //we can either start from the step with index 0, or the step with index 1.
        cost[i] +=  Math.min(cost[i-1], cost[i-2])
    }
    // mininum cost to reach the top floor will be minimum of the two (sum) at the last 2 steps
    return Math.min(cost[costLength-1], cost[costLength-2]);
};