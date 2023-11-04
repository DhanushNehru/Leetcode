/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
    // Find the time it takes for the rightmost ant on the left side to fall off.
    const maxLeft = Math.max(...left);
    
    // Find the time it takes for the leftmost ant on the right side to fall off.
    const minRight = n - Math.min(...right);

    // The last ant(s) to fall out of the plank will be at the maximum time between maxLeft and minRight.
    return Math.max(maxLeft, minRight);
};