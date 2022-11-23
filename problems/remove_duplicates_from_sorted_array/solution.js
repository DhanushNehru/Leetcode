/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const uniqueNumArray = [...new Set(nums)];
    for(let i=0;i<uniqueNumArray.length;i++){
        nums[i] = uniqueNumArray[i];
    }
    return uniqueNumArray.length
}