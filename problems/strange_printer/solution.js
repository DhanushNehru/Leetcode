/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
     if (s.length === 0) {
        return 0;
    }

    const n = s.length;
    // Create a 2D array to store the minimum number of turns needed to print substring s[i...j]
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Initialize the diagonal elements of dp
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    // Iterate over substring lengths from 2 to n
    for (let len = 2; len <= n; len++) {
        // Iterate over the starting index of the substring
        for (let i = 0; i < n - len + 1; i++) {
            const j = i + len - 1;
            dp[i][j] = len; // Set to the maximum possible value for now

            // Try all possible partitions of the substring s[i...j]
            for (let k = i; k < j; k++) {
                let temp = dp[i][k] + dp[k + 1][j];
                if (s[k] === s[j]) {
                    temp -= 1; // If s[k] is the same as s[j], one turn can be saved
                }
                dp[i][j] = Math.min(dp[i][j], temp);
            }
        }
    }

    return dp[0][n - 1];
};