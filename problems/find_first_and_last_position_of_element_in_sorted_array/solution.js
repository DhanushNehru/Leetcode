/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return [occurance(nums, target, true),occurance(nums, target, false)]
};

const occurance = (nums, target, isFirstOccurance) => {
    let left = 0;
    let right = nums.length - 1;
    let ans = -1
    let mid;
    while(left <= right){
       mid = Math.floor((right+left)/2)
       if(nums[mid]==target){
           if(isFirstOccurance){
               right = mid - 1
           }
           else{
               left = mid + 1
           }
           
           ans = mid;

       }else if(nums[mid]<target){
           left = mid + 1
       }else{
           right = mid -1
       }
    }
    return ans
}
