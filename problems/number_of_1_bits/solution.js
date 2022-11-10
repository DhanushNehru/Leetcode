/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    //toString(2) converts to binary
    return n.toString(2).replaceAll('0','').length;
};