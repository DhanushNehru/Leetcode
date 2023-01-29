/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    // similar to https://leetcode.com/problems/number-of-1-bits/
    let arr = (x^y).toString(2).split("")
    arr = arr.filter(el => el === "1")
    return arr.length
};