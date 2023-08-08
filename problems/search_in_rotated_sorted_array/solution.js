/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1
    while(left<=right){
        const mid = Math.floor((left+right) / 2);

        if(nums[mid] === target){
            return mid;
        }

        if(nums[left] <= nums[mid]){
            // target is between mid and left
            if(nums[left]<=target && target<nums[mid]){
                right = mid-1
            }
            else{
                left = mid+1
            }
        }
        else{
            // target is between mid and right
            if(nums[right]>=target && target>nums[mid]){
                left = mid+1
            }
            else{
                right = mid-1
            }
        }
    }
    return -1
};