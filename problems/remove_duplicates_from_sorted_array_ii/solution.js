/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    while(i<nums.length-1){
        if(nums[i] == nums[i+1] && nums[i+1] == nums[i+2]){
            nums.splice(i,1)
            --i
        }
        ++i
    }
};