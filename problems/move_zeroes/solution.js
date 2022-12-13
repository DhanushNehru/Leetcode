/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0
    for (let i = 0; i<nums.length;i++) {
        if (nums[index] == 0) {
            nums.splice(index,1)
            nums.push(0)
            continue
        }
        index++
    }
};