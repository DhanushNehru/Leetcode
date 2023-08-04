/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// Dynamic Programming
var wordBreak = function(s, wordDict) {
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        for (const word of wordDict) {
            if (i - word.length >= 0 && dp[i - word.length] && s.substring(i - word.length, i) === word) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n]; 
};