/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let subArraySum = nums[0]
    let max = nums[0]
    
    for(let i = 1; i < nums.length; i++) {
        subArraySum = Math.max(subArraySum + nums[i], nums[i])
        max = Math.max(subArraySum, max)
    }
    
    return max
}