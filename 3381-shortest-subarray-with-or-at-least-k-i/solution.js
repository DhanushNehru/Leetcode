/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
    let result = Infinity;
 
    for (let i = 0; i < nums.length; ++i) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum |= nums[j];
            if (sum >= k) {
                result = Math.min(result, (j - i + 1));
            }
        }
    }
 
    return result === Infinity ? -1 : result;
};
