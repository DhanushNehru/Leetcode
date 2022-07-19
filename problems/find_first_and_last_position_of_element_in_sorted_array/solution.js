/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const starting = nums.indexOf(target);
    const ending = nums.lastIndexOf(target);
    return [starting, ending]
};