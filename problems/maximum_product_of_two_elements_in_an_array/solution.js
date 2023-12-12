/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let maxValue = 0;
    const numsArr = nums.map(num => num - 1), numsLength = nums.length;

    for(let i=0;i<numsLength;i++){
        for(let j=i+1;j<numsLength;j++){
            maxValue = Math.max(maxValue, numsArr[i]*numsArr[j])
        }
    }

    return maxValue;
};