/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
    let n = nums.length;

    // If there's only one element, it can't form a valid partition.
    if (n === 1) return false;

    // Initialize an array to keep track of the dynamic programming values.
    // dp[0], dp[1], and dp[2] represent the states at three consecutive indices.
    // dp[0]: Represents whether the last two numbers had a difference of 1.
    // dp[1]: Represents whether the last two numbers were the same.
    // dp[2]: Represents whether the last three numbers were the same.
    let dp = [true, false, n > 1 ? nums[0] === nums[1] : false];

    // Iterate through the array starting from the third element.
    for (let i = 2; i < n; i++) {
        // Calculate the current dynamic programming value based on different conditions:
        let current_dp =
            // If the current number is equal to the previous one and the second-to-last state is true.
            (nums[i] === nums[i-1] && dp[1]) ||
            // If the current number is equal to the previous two numbers and the third-to-last state is true.
            (nums[i] === nums[i-1] && nums[i] === nums[i-2] && dp[0]) ||
            // If the current number is consecutive with the previous two numbers and the third-to-last state is true.
            (nums[i] - nums[i-1] === 1 && nums[i-1] - nums[i-2] === 1 && dp[0]);

        // Update the dynamic programming states by shifting them one step forward.
        dp[0] = dp[1];
        dp[1] = dp[2];
        dp[2] = current_dp;
    }

    // The final value of dp[2] represents whether the entire array can be partitioned as required.
    return dp[2];   
};