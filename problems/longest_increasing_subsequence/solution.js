/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const numsLength = nums.length, dp = new Array(numsLength).fill(1)
    let result = dp[0]

    // Iterate through the array starting from the second element
    for(let i=1; i<numsLength; i++){
        // Iterate through the elements before the current index
        for(let j=0; j<i; j++){
            if(nums[i] > nums[j]){
                // Update length of the Longest Increasing Subsequence ending at the current index
                dp[i] = Math.max(dp[i] , dp[j] + 1)
            }
        }
        // Update the overall result with the maximum Longest Increasing Subsequence length so far
        result = Math.max(result , dp[i])
    }

    return result;
};