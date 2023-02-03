/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    return Math.max(Math.min(parseInt(s) || 0, 2147483647), -2147483648) //Math.pow(2,31) = 2147483647
};