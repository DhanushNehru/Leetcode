/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var numMusicPlaylists = function(n, goal, k) {
    const MOD = 1e9 + 7;  // Define a constant for modulo operation
    let dp = Array.from({length: 2}, () => new Array(n + 1).fill(0));  // Create a 2D array for dynamic programming
    dp[0][0] = 1;  // Initialize the base case: 1 playlist with 0 songs is possible

    for (let i = 1; i <= goal; i++) {
        dp[i%2][0] = 0;  // Initialize the starting column of each row to 0
        for (let j = 1; j <= Math.min(i, n); j++) {
            // Calculate the number of playlists for the current (i, j) combination
            dp[i%2][j] = dp[(i - 1)%2][j - 1] * (n - (j - 1)) % MOD;
            
            // If the current number of songs exceeds k, add another possibility to the count
            if (j > k)
                dp[i%2][j] = (dp[i%2][j] + dp[(i - 1)%2][j] * (j - k)) % MOD;
        }
    }

    // Return the total number of playlists satisfying the given conditions
    return dp[goal%2][n];    
};