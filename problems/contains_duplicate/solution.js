/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsLength = nums.length;
    const uniqueNumsArray = [...new Set(nums)]
    if(uniqueNumsArray.length < numsLength){
        return true;
    }
    else{
        return false
    }
};