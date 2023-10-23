/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    // Check if 'n' is greater than 0 and if the result of the logarithm base 2 of 'n' modulo 2 is equal to 0.
    return n > 0 && Math.log2(n) % 2 === 0;
};