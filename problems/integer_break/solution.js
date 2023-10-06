/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    // If n is less than or equal to 3, return n - 1 as the result.
    if (n <= 3) {
        return n - 1;
    } else {
        // If n is greater than 3, calculate the maximum product using dynamic programming.

        // If n is divisible by 3 evenly, we can break it into equal parts of 3.
        if (n % 3 === 0) {
            // Calculate the maximum product by raising 3 to the power of (n / 3). [ Math Formula ]
            return Math.pow(3, Math.floor(n / 3));
        }
        // If n leaves a remainder of 1 when divided by 3, we can break it into parts of 3 with one leftover part of 4.
        else if (n % 3 === 1) {
            // Calculate the maximum product by raising 3 to the power of (n / 3 - 1) and multiplying it by 4.
            return Math.pow(3, Math.floor(n / 3) - 1) * 4;
        }
        // If n leaves a remainder of 2 when divided by 3, we can break it into parts of 3 with two leftover parts of 2.
        else {
            // Calculate the maximum product by raising 3 to the power of (n / 3) and multiplying it by 2.
            return Math.pow(3, Math.floor(n / 3)) * 2;
        }
    }    
};