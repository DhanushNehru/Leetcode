/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(N) {
    if (N > 4800) {
        return 1.0;
    }
    N = Math.floor((N + 24) / 25);
    let memo = {};

    return dp(N, N);

    function dp(a, b) {
        if (a <= 0 && b <= 0) {
            return 0.5;
        }
        if (a <= 0) {
            return 1.0;
        }
        if (b <= 0) {
            return 0.0;
        }
        let key = a * 5000 + b;
        if (key in memo) {
            return memo[key];
        }
        memo[key] = 0.25 * (dp(a-4, b) + dp(a-3, b-1) + dp(a-2, b-2) + dp(a-1, b-3));
        return memo[key];
    }
};
