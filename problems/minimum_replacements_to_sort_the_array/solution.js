/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
    // Initialize variables 'last' to store the last element and 'ans' to count the operations
    let last = nums[nums.length - 1];  // Initialize 'last' with the last element of the array
    let ans = 0;  // Initialize 'ans' to count the operations
    
    // Traverse the array in reverse order, starting from the second-to-last element
    for (let i = nums.length - 2; i >= 0; --i) {
        // Check if the current element is greater than the 'last' element
        if (nums[i] > last) {  
            // Calculate the number of times 'last' should be replaced to make it smaller than 'nums[i]'
            let t = Math.floor(nums[i] / last);
            
            // If 'nums[i]' is not divisible by 'last', an additional replacement is needed
            if (nums[i] % last !== 0) {
                t++;
            }
            
            // Update 'last' by replacing it with a smaller value obtained from 'nums[i]' and 't'
            last = Math.floor(nums[i] / t); 
            
            // Increment 'ans' by 't - 1' to keep track of the number of operations
            ans += t - 1;  
        } else {
            // If the current element is not greater than 'last', update 'last' to the current element
            last = nums[i];  
        }
    }
    
    // Return the total number of operations
    return ans;
};