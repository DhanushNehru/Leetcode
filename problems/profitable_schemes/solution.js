/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {
    const gLen = group.length
    
    const dp = Array(gLen + 1).fill().map(() => {
       return Array(n+1).fill().map(() => Array(minProfit + 1).fill(0))
    })
    
    //base case
    dp[0][0][0] = 1
    
    const mod = 10 ** 9 + 7
    
    let result = 0
    
    for(let i =  1; i <= gLen; i++){
        
        for(let j = 0; j<=n; j++){
            
            for(let k = 0; k<= minProfit; k++){
                
                if (j < group[i-1]) dp[i][j][k] = dp[i-1][j][k]
                
                else dp[i][j][k] =(dp[i-1][j][k] + dp[i-1][j-group[i-1]][Math.max(0, k-profit[i -1])]) % mod
            }  
        }
    }
    
    for(let i = 0; i <=n; i++){
        result = (result + dp[gLen][i][minProfit]) % mod
    }
    
    return result
};