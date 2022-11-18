/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b) => a-b)
    let result = nums.length;
    for(let i=0; i<result;i++){
        if(nums[i] == i){
            continue;
        }
        else{
            result = i;
            break;
        }
    }
    return result;
};