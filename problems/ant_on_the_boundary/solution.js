/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let direction = 0, noOfTimesAnTRetrunsToBoundary = 0
    for(let i=0;i<nums.length;i++){
        direction += nums[i]
        if(direction == 0){
            ++noOfTimesAnTRetrunsToBoundary
        }
    }
    return noOfTimesAnTRetrunsToBoundary
};