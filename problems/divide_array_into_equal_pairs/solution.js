/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    // we sort the array first
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length-1;i+=2){
        // we increment +=2 and check for the pairs alone
        if(!(nums[i]==nums[i+1])){
            // if pairs are not equal we return false
            return false;
        }
    }
    return true;
};