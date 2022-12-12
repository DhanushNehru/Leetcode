/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    // first we take the copy of the original array 
    const originalNums = [...nums]
    nums.sort((a,b) => b-a)
    return nums[0] >= 2*nums[1] ? originalNums.indexOf(nums[0]) : -1
};