/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const numLength = nums.length;
    const rightNums = nums.splice(numLength - (k%numLength))
    console.log(" Right most values ", rightNums)
    nums.splice(0,0, ...rightNums)
};