/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// Similar to https://leetcode.com/problems/search-in-rotated-sorted-array/
var search = function(nums, target) {
    let left = 0, right = nums.length - 1
    while(left<=right){
        const mid = Math.floor((left+right) / 2);

        if(nums[mid] === target){
            return true;
        }

        if (nums[left] === nums[mid]) { // Handle cases where there are duplicate elements between 'left' and 'mid'.
            left++; // Move the 'left' pointer one step to the right and continue to the next iteration.
            continue;
        }

        if(nums[left] <= nums[mid]){
            // target is between mid and left
            if(nums[left]<=target && target<=nums[mid]){
                right = mid-1
            }
            else{
                left = mid+1
            }
        }
        else{
            // target is between mid and right
            if(nums[right]>=target && target>=nums[mid]){
                left = mid+1
            }
            else{
                right = mid-1
            }
        }
    }
    return false    
};