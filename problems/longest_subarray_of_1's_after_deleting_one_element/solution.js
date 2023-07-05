/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    // Dynamic programming
    let deletedState = 0, notDeletedState = 0, max = 0;
    // the solution is to keep track of non deleted and deleted states
    for(const num of nums){
        if(num==0){
            deletedState = notDeletedState;
            notDeletedState = 0;
        }
        else{
            deletedState++; notDeletedState++;
        }
        max = Math.max( deletedState, max)
    }
    // to check this case >> nums = [1, 1, 1]
    return max == nums.length ? max - 1 : max 
};