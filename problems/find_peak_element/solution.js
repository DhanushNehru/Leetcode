/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let start = 0;
    let end = nums.length - 1

    while(start<end){
        let mid = start + Math.floor((end-start)/2)
        // we can return any peak index 
        // checking mid number is greater than the corresponding next number  
        if(nums[mid]> nums[mid+1]){
            end = mid;
        }
        else {
            start = ++mid;
        }
    }
    return start;
};