/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // We implement this solution based on bitwise operator
    let result = nums[0];
    for(let i=1;i<nums.length;i++){
        result = result^nums[i]
    }
    return result;
};