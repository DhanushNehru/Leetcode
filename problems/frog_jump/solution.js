/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    const n = stones.length; // Get the total number of stones
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(false)); // Initialize a 2D DP array
    
    dp[0][0] = true; // The starting stone has a jump size of 0, so it's reachable
    
    // Iterate through each stone starting from the second stone
    for (let i = 1; i < n; i++) {
        // Iterate through previous stones to check if current stone is reachable
        for (let j = i - 1; j >= 0; j--) {
            const diff = stones[i] - stones[j]; // Calculate the difference in positions
            
            // If the difference is greater than the maximum jump possible, stop checking previous stones
            if (diff > j + 1) {
                break;
            }
            
            // Mark the current stone as reachable with the given jump size (diff)
            dp[i][diff] = dp[j][diff - 1] || dp[j][diff] || dp[j][diff + 1];
            
            // If we've reached the last stone and it's reachable, return true
            if (i === n - 1 && dp[i][diff]) {
                return true;
            }
        }
    }
    
    // If we've checked all possibilities and the last stone isn't reachable, return false
    return false;
};