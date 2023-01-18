/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    // Kadane’s Algorithm    
    // Case 1
    // maxSubArraySum = max(the max subarray sum, the total sum - the min subarray sum)
    // Case 2
    // max(prefix+suffix) = max(totalSum - subarray) = totalSum + max(-subarray) = total sum - min(subarray)
    // Case 3 
    // If all numbers are negative 
    // maxSum = max(A) & minSum = sum(A)
    let currentMax = 0, currentMin = 0, maxSum = nums[0], minSum = nums[0], total = 0;
    for(num of nums){
        currentMax = Math.max(currentMax+num, num)
        maxSum = Math.max(currentMax, maxSum)
        
        currentMin = Math.min(currentMin+num, num)
        minSum = Math.min(currentMin, minSum)

        total+=num;
    }
    return maxSum > 0 ? Math.max(maxSum, total-minSum) : maxSum
};