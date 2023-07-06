/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // Initialize variables
    let left = 0; // Left pointer
    let right = 0; // Right pointer
    let sum = 0; // Current sum of subarray
    let result = 0; // Length of the minimum subarray
    
    // Iterate through the array using the right pointer
    while (right < nums.length) {
        sum += nums[right]; // Add the current number to the sum
        
        // If the sum is greater than or equal to the target
        while (sum >= target) {
            let len = right - left + 1; // Length of the subarray
            
            // If the current subarray length is smaller than the current minimum length or it's the first subarray found
            if (result === 0 || len < result) {
                result = len; // Update the minimum length
            }
            
            sum -= nums[left]; // Remove the leftmost element from the sum
            left++; // Move the left pointer to the right
        }
        
        right++; // Move the right pointer to the right
    }
    
    return result; // Return the minimum subarray length
};
