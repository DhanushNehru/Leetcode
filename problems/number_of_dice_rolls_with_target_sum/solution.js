/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
// Dynamic programming
var numRollsToTarget = function(n, k, target) {
    // dp[n][target] - stores the number of ways to obtain the target sum with 'n' dice rolls.
    const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(-1));

    const mod = Math.pow(10, 9) + 7;

    const recursion = (dp, n, k, target) => {
        // Base case: If the target is 0 and we have used all the dice, there is one way (no more rolling needed)
        if(target == 0 && n == 0){
            return 1
        }
        // Base case: If we have used all the dice or the target is non-positive, there are no ways
        else if(n == 0 || target <= 0){
            return 0
        }
         // If the result for the current state is already calculated, return it to avoid redundant computations
        else if(dp[n][target] !== -1){
            return dp[n][target] % mod
        }
        // Recursive case: Calculate the number of ways by considering each possible outcome for the current die
        else{
            let ways = 0;
            for (let i = 1; i <= k; i++) {
                ways = (ways + recursion(dp, n - 1, k, target - i)) % mod;
            }

            // Store the result in the dp table to avoid recomputation and return the result
            dp[n][target] = ways % mod;
            return dp[n][target];
        }
    }

    return recursion(dp, n, k, target);

};