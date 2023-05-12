/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {

    const n = questions.length;
    const dp = new Array(n).fill(0);
    let max = 0;
    
    for (let i = n - 1; i >= 0; i--) {
        const [point, brainpower] = questions[i];
        dp[i] = Math.max(max, point + (dp[i + brainpower + 1] || 0));
        max = Math.max(max, dp[i]);
    }

    return max;
};