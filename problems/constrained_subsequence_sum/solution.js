/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// for every two consecutive integers in the subsequence, nums[i] and nums[j], where i < j, the condition j - i <= k is satisfied
// ( difference between their index positions should not be greater than k )
var constrainedSubsetSum = function(nums, k) {
    // Create an empty array to use as a double-ended queue (dq)
    let dq = [];

    // Iterate through the input array 'nums'
    for (let i = 0; i < nums.length; i++) {
        // Update the current element by adding the maximum sum so far (if available)
        nums[i] += dq.length > 0 ? nums[dq[0]] : 0;

        // While the double-ended queue is not empty and conditions are met:
        while (dq.length > 0 && (i - dq[0] >= k || nums[i] >= nums[dq[dq.length - 1]])) {
            // Remove elements from the front of the queue until the conditions are satisfied
            if (nums[i] >= nums[dq[dq.length - 1]]) {
                dq.pop(); // Remove the last element if it's smaller
            } else {
                dq.shift(); // Remove the first element if the index difference is greater than or equal to 'k'
            }
        }

        // If the current element's sum is greater than 0, add its index to the queue
        if (nums[i] > 0) {
            dq.push(i);
        }
    }

    // Return the maximum value in the modified 'nums' array
    return Math.max(...nums);
}
