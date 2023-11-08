/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    // Calculate the absolute differences in x and y coordinates between the start and target points.
    let xDistance = Math.abs(sx - fx);
    let yDistance = Math.abs(sy - fy);
    
    // Calculate the minimum Manhattan distance (minimum steps) to reach the target.
    let minDist = Math.min(xDistance, yDistance) + Math.abs(yDistance - xDistance);

    // If the starting and target cells are the same, check if t is not 1.
    if (minDist === 0) {
        if (t === 1) {
            return false; // If t is 1, it's impossible to stay at the same cell for that time, so return false.
        } else {
            return true; // If t is greater than 1, we can stay at the same cell for t seconds, so return true.
        }
    }
    
    // If the minimum distance is greater than 0, check if t is greater than or equal to the minimum distance.
    return t >= minDist; // If t is sufficient to cover the minimum distance, return true; otherwise, return false.    
};