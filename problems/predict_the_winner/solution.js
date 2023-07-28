/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    const n = nums.length;
    
    // Create a 2D array 'dp' to store the scores difference between two players at different game states.
    const dp = [];
    
    // Loop through the 'nums' array to initialize the diagonal of the 'dp' array, representing the base case where there's only one element in the subarray.
    for (let i = 0; i < n; i++) {
        // Create a new row in the 'dp' array with all elements set to 0.
        dp[i] = new Array(n).fill(0);
        
        // Set the diagonal elements to the values of 'nums', as the score difference when there's only one element is the element itself.
        dp[i][i] = nums[i];
    }
    
    // Outer loop to iterate over the possible lengths of subarrays, starting from 2 (as we already initialized the base case).
    for (let len = 2; len <= n; len++) {
        // Inner loop to iterate over all possible starting positions of the subarray of length 'len'.
        for (let start = 0; start < n - len + 1; start++) {
            // Calculate the ending position of the subarray using the starting position and the current length.
            const end = start + len - 1;
            
            // Use dynamic programming to determine the score difference for the subarray between 'start' and 'end'.
            // The player can either choose the element at 'start' and the score difference will be 'nums[start] - dp[start + 1][end]',
            // or choose the element at 'end' and the score difference will be 'nums[end] - dp[start][end - 1]'.
            // The player will choose the option that maximizes their score difference.
            dp[start][end] = Math.max(nums[start] - dp[start + 1][end], nums[end] - dp[start][end - 1]);
        }
    }
    
    // The final value in the 'dp' array, dp[0][n - 1], represents the score difference between the two players when considering the whole 'nums' array.
    // If the score difference is greater than or equal to 0, it means the first player can win, so return true. Otherwise, return false.
    return dp[0][n - 1] >= 0;
};