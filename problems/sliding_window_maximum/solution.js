/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
   // Using monotonic queue to push an element in the queue will pop all elements smaller than it.

  // Initialize an array to store the maximum values for each window position
  let maxes = [];
  // Initialize a monotonic queue to keep track of potential maximum values
  let q = [];

  // Iterate through all positions in the array
  for (let last = 0, first = 1 - k; last < nums.length; last++, first++) {
    // Remove elements from the back of the queue that are smaller than the current element
    while (q.length && nums[last] > q[q.length - 1]) {
      q.pop();
    }
    // Add the current element to the queue
    q.push(nums[last]);

    // If the window isn't fully overlapping nums, skip calculating the maximum
    if (first < 0) {
      continue;
    }

    // Add the maximum value in the current window (front of the queue) to the output array
    maxes.push(q[0]);

    // If the biggest element in the queue is about to exit the window, remove it
    if (nums[first] === q[0]) {
      q.shift();
    }
  }

  // Return the array containing the maximum values for each window
  return maxes;
};