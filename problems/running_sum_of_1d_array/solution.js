/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const numsLength = nums.length;
    let sumArray = [];
    let sum = 0;
    for(let i=0;i<numsLength;i++){
        sum += nums[i];
        sumArray.push(sum);
    }
    return sumArray;
};