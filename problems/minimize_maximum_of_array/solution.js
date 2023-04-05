/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let result = nums[0], sum = nums[0]
    for(let i=1;i<nums.length;i++){
        sum += nums[i]
        result = Math.max(result, Math.ceil(sum/(i+1)))
    }
    return result
};