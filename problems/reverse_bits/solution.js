/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let string = n.toString(2).split('').reverse().join('');
    string += '0'.repeat(32 - string.length)
    return parseInt(string, 2)
};