/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let dp = []
    
    for(let row = 0 ; row <= s.length ; row ++){
        let arr = []
        
        for(let col = 0 ; col <= s.length ; col ++) arr.push(0)
        
        dp.push(arr)
    }
    
    let rev = s.split("")
    
    rev = rev.reverse();
    
    rev = rev.join("");
    
    for(let row = 1 ; row <= s.length ; row ++ )
        for(let col = 1 ; col <= s.length ; col ++) {
            
            if(s[row-1] === rev[col-1])
                dp[row][col] = 1 + dp[row-1][col-1]
            else
                dp[row][col] = Math.max(dp[row-1][col],dp[row][col-1])
        }
    
    return s.length - dp[s.length][s.length];
};