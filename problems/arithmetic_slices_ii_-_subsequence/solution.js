/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    const numsLength = nums.length
    let totalCount = 0

    // dynamic programming
    const dp = new Array(numsLength).fill().map( () => new Map());

    for(let i=1; i<numsLength; i++){
        for(let j=0; j<i; j++){
            const diff = nums[i] - nums[j]

            if(dp[j].has(diff)){
                dp[i].set(diff,  (dp[i].get(diff) || 0) + dp[j].get(diff) )
                totalCount += dp[j].get(diff);
            }

            dp[i].set(diff, (dp[i].get(diff) || 0) + 1);
        }
    }
    return totalCount;
};