/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums = [...new Set(nums)].sort((a,b)=>a-b)
    const numsLength = nums.length
    if(numsLength<=2){
        return nums[numsLength-1]
    }
    return nums[numsLength-3];
};