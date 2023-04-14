/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const t=s.split("").reverse().join("");
    let m= s.length;
    let dp=[];
    for(let i=0; i<=m; i++){
        dp[i]= new Array(m+1).fill(0);
    }
    for(let i=1; i<=m; i++){
        for(let j=1;j<=m; j++){
            if(s.charAt(i-1) == t.charAt(j-1)){
                dp[i][j]= dp[i-1][j-1]+1;
            }else{
                dp[i][j]= Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[m][m];
};