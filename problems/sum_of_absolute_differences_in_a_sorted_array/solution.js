/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    // calculate the total sum of the array
    const totalSum = nums.reduce((a,b) => a+b ), numsLength = nums.length, result = [];

    let left = 0; right = totalSum;
    
    for(i=0;i<nums.length;i++){
        right -= nums[i];
        // sum of all the elem before nums[i] in the array multiplied by their respective indices: nums[i] * i
        // Subtracts the cumulative sum of elem to the left of current elem (excluding the current elem itself): - left
        // Adds the cumulative sum of elements to the right of the current elem: + right
        // calculate cumulative sum of elem to right of the current elem: nums[i] * (numsLength - i - 1)
        result.push( (nums[i] * i) - left + right - (nums[i] * (numsLength - i - 1)));
        // nums = [2,3,5]
        // result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4
        // result[0] = (2*0) - 0 + 8 - (2 * (3-0-1) = 0 + 8 - 4 = 4

        left += nums[i];
    }
    
    return result;
};