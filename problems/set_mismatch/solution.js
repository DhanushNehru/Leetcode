/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums.sort((a,b) => a-b)
    const result = []

    for(let i=1;i<=nums.length;i++){
        if(nums[i] == nums[i-1]){
            result[0] = nums[i]
        }
        if(!nums.includes(i)){
            result[1] = i
        }
    }
    return result
};