/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    let memo = {};
    
    for (let i = 0; i < piles.length; i++) {
        memo[i] = {};
    }
    
	// Choose n coins from piles[0], piles[1], ... , piles[i]
    const dp = function(i, n) {
	
		// Edge cases
        if (i == -1 || n <= 0) return 0;
        
        if (n in memo[i]) return memo[i][n];
        
		// Base case: choose 0 coins from piles[i] and choose n coins from piles up to piles[i-1]
        memo[i][n] = dp(i-1, n);
        let sum = 0;
        
		// Choose j+1 coins from the current pile
        for (let j = 0; j < Math.min(piles[i].length, n); j++) {
            sum += piles[i][j];
            
            memo[i][n] = Math.max(memo[i][n], sum + dp(i-1, n-j-1));
        }
        
        return memo[i][n];
    }
    
    return dp(piles.length-1, k);
};