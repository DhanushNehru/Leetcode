/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    // sort in ascending order
    nums.sort((a, b) => a - b);
    let count = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        // Check if the current element is not equal to the next element
        if (nums[i] !== nums[i + 1]) {
            // If not equal, increment count by the number of remaining elements
            // that are greater than or equal to the current element
            count += nums.length - (i + 1);
        }
    }
    
    return count;
};