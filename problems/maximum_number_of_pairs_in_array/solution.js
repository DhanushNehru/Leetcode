/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    nums.sort((a,b) => a-b)
    let noOfPairs = 0, noOfLeftOverIntegers = 0
    if(nums.length == 1){
        return [0, 1]
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            ++noOfPairs;
            ++i
        }
        else{
            ++noOfLeftOverIntegers;
        }
    }
    return [noOfPairs, noOfLeftOverIntegers]
};