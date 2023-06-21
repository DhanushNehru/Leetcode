/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
    const n = nums.length;
    if(n <= 1) return 0;

    // [num, cost] --> Ascending order by num
    const numCost = [];
    for(let i = 0; i < n; i++){
        numCost.push([nums[i], cost[i]]);
    }
    numCost.sort((a, b) => a[0] - b[0]);

    // prefix sum
    const prefix = [numCost[0][1]];
    for(let i = 1; i < n; i++){
        prefix.push(prefix[i - 1] + numCost[i][1]);
    }
    
    // suffix sum
    const suffix = [prefix[n - 1]];
    for(let i = 1; i < n; i++){
        suffix.push(suffix[i - 1] - numCost[i - 1][1]);
    }
    
    // first step: sum all steps reach to first number
    const firstNum = numCost[0][0];
    let preStepSum = 0;
    for(let i = 1; i < n; i++){
        const [num, getCost] = numCost[i];
        preStepSum += (num - firstNum) * getCost;
    }
    
    // start moving
    let res = preStepSum;
    for(let i = 1; i < n; i++){
        const steps = numCost[i][0] - numCost[i - 1][0];
        const totalSteps = steps * (prefix[i - 1] - suffix[i]);
        const cur = Math.abs(preStepSum + totalSteps);
        res = Math.min(res, cur);
        preStepSum = cur;
    }
    
    return res;
};