/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var numOfArrays = function(n, m, k) {
    const mod = 1e9 + 7;

    let dp = Array.from({
        length: m + 1
    }, () => Array(k + 1).fill(0));
    let prefix = Array.from({
        length: m + 1
    }, () => Array(k + 1).fill(0));
    let prevDp = Array.from({
        length: m + 1
    }, () => Array(k + 1).fill(0));
    let prevPrefix = Array.from({
        length: m + 1
    }, () => Array(k + 1).fill(0));

    for (let j = 1; j <= m; j++) {
        prevDp[j][1] = 1;
        prevPrefix[j][1] = j;
    }

    for (let _ = 2; _ <= n; _++) {
        dp = Array.from({
            length: m + 1
        }, () => Array(k + 1).fill(0));
        prefix = Array.from({
            length: m + 1
        }, () => Array(k + 1).fill(0));

        for (let maxNum = 1; maxNum <= m; maxNum++) {
            for (let cost = 1; cost <= k; cost++) {
                dp[maxNum][cost] = (maxNum * prevDp[maxNum][cost]) % mod;

                if (maxNum > 1 && cost > 1) {
                    dp[maxNum][cost] = (dp[maxNum][cost] + prevPrefix[maxNum - 1][cost - 1]) % mod;
                }

                prefix[maxNum][cost] = (prefix[maxNum - 1][cost] + dp[maxNum][cost]) % mod;
            }
        }

        prevDp = dp;
        prevPrefix = prefix;
    }

    return prefix[m][k];
}