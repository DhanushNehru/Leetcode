/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    let i = 0;
    while(i<nums.length){
        if(nums[i]==nums[i+1]){
            nums[i]*=2
            nums[i+1]=0
        }
        ++i
    }
    i=0;
    let zeroCount = 0;
    while(i<nums.length){
        if(nums[i]==0){
            nums.splice(i,1)
            ++zeroCount
        }
        else{
            ++i
        }
       
    }
    while(zeroCount!=0){
        nums.push(0)
        --zeroCount;
    }
    return nums;
};