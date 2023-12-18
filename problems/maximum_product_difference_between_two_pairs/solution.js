/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    // sort in ascending
    nums.sort((a,b) => a-b)
    // we multiply last 2 numbers & first 2 numbers and subtract them
    // as the minimum constrain of nums length is 4
    return (nums[nums.length-1] * nums[nums.length-2] ) - (nums[0] * nums[1])
};