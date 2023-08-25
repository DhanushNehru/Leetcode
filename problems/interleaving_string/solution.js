/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    // Calculate lengths of input strings plus 2
    // This is done to handle array indexing and boundary conditions
    let n = s1.length + 2, m = s2.length + 2
    
    // Check if the total length of s1 and s2 is equal to s3
    if (n + m - 4 !== s3.length) return false
    
    // Initialize a dynamic programming array to store intermediate results
    // dp[j] will store whether the interleaving is possible up to column j
    let dp = new Uint8Array(m)
    
    // Initialize the first cell as 1 to signify the starting point
    dp[1] = 1
    
    // Loop through the rows of s1
    for (let i = 1; i < n; i++)
        // Loop through the columns of s2
        for (let j = 1; j < m; j++) {
            // Check if the current cell can be reached from the cell above (up)
            let up = dp[j] && s1[i-2] === s3[j+i-3]
            
            // Check if the current cell can be reached from the cell on the left (left)
            let left = dp[j-1] && s2[j-2] === s3[j+i-3]
            
            // Set the value of the current cell based on whether it can be reached from above or left
            dp[j] = up || left
        }
    
    // Return the value in the last cell of dp, which represents whether interleaving is possible
    return dp[m-1]
};
