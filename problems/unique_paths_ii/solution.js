/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0]) return 0
    let m = obstacleGrid.length, n = obstacleGrid[0].length
    let dp = Array.from({length: m}, el => new Uint32Array(n))
    dp[0][0] = 1
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (obstacleGrid[i][j] || (!i && !j)) continue
            else dp[i][j] = (i ? dp[i-1][j] : 0) + (j ? dp[i][j-1] : 0)
    return dp[m-1][n-1]
};