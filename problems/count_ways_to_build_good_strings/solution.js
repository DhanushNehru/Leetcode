/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    let dp = new Array(high+1).fill(0);
    dp[0] = 1;
    let ans = 0;
    for (let i = 1; i <= high; i++) {
        dp[i] = ((i-zero>=0 ? dp[i-zero]:0)+(i-one>=0 ? dp[i-one]:0))%1000000007;
        if (i >= low) {
            ans = (ans+dp[i])%1000000007;
        }
    }
    return ans;
};