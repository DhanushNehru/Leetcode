/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0, end = nums.length - 1
    while(start < end){
        const middle = Math.floor((start + end)/ 2)
        if(nums[middle] == target) return middle;

        if(nums[middle] > target){
            end = middle
        }
        else{
            start = middle + 1
        }
    }
    if (start === end){
        return target <= nums[start] ? start : start + 1;
    }
};