/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    let dp = {}, max = 0;
    for(let i=0;i<nums.length;i++){
        if (dp[i]==null) dp[i] = {};
        for(let j=0;j<i;j++){
            const diff = nums[i]-nums[j]
            dp[i][diff] = 1 + (dp[j][diff] || 1 )
            max = Math.max(dp[i][diff], max)
        }
    }
    return max;
};