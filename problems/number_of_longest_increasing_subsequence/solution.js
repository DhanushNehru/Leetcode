/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let dp = Array(nums.length).fill(1);
    let count = Array(nums.length).fill(1);
    
    let maxLen = 0;
    for(let i = 0; i < nums.length; i++) { // current one
        for(let j = 0; j < i; j++) { // compare to previous ones
            if(nums[j] < nums[i] && dp[j]+1 > dp[i]) {
                dp[i] = dp[j]+1;
                count[i] = count[j];
            } else if(nums[j] < nums[i] && dp[j]+1 === dp[i]) {
                count[i] += count[j];
            } 
        }
        maxLen = Math.max(dp[i], maxLen);
    }
    
    let res = 0;
    for(let i = 0; i < count.length; i++) {
        if(dp[i] === maxLen) res += count[i];
    }
    
    return res;
};