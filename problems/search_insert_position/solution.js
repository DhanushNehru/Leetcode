/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let result = nums.indexOf(target)
    let i = 0;
    const numLength = nums.length;
    if(result<0){
        while(i<=numLength){
            if(nums[i]<target){
                ++i;    
            }
            else{
                result = nums.indexOf(nums[i])
                result = result >=0 ? result : numLength
                break;
            }
        }
    }
    return result;
};