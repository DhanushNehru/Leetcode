/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let result = []
    nums = nums.sort((a,b)=> a-b)
    nums.forEach((num, index) => (num == target)? result.push(index) : null )
    return result;
};