/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    const map = new Map();
    let max = 0;
    
    for (const num of arr) {
        const diff = num - difference;
        const len = ( map.get(diff) ? map.get(diff) : 0 ) + 1;
        map.set(num, len);
        max = Math.max(len, max);
    }
    
    return max;
};