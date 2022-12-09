/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    // ** is exponentation operator which is equal to Math.pow()
    // since we need sqrt we use 0.5
    return (num ** 0.5) % 1 == 0
};