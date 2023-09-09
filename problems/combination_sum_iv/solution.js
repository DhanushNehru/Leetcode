/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    // Create an array 'dp' of size 'target + 1' to store the number of combinations for each sum from 0 to 'target'.
    let dp = new Array(target + 1).fill(0);

    // There is one way to reach the sum of 0, which is by not selecting any number from 'nums'.
    dp[0] = 1;

    // Loop through each sum from 1 to 'target'.
    for(let i = 1; i <= target; i++) {
        // Iterate through the numbers in 'nums'.
        for(let num of nums) {
            // Check if the current number 'num' can be used to reach the sum 'i'.
            if(num <= i) {
                // If 'num' is less than or equal to 'i', add the number of combinations for the remaining sum 'i - num' to 'dp[i]'.
                dp[i] += dp[i - num];
            }
        }
    }

    // The final value in 'dp[target]' represents the number of combinations that add up to the target sum.
    return dp[target];
};
