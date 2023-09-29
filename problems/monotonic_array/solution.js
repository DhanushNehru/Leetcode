/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let isIncreasing = nums[0]<=nums[nums.length-1] ? true : false
    for(let i=1;i<nums.length;i++){
        if(isIncreasing && nums[i-1]>nums[i]){
            return false
        }
        if(!isIncreasing && nums[i-1]<nums[i]){
            return false
        }
    }
    return true
};