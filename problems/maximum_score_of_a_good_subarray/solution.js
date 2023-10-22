/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    // Initialize left and right pointers to 'k', as we start with a subarray centered at 'k'.
    let left = k;
    let right = k;

    // Initialize 'min_val' to the value at index 'k', as it's the minimum in the initial subarray.
    let min_val = nums[k];

    // Initialize 'max_score' to 'min_val' as the initial maximum score as (  i <= k <= j )
    let max_score = min_val;

    // Continue the loop until we reach the edges of the input array.
    while (left > 0 || right < nums.length - 1) {
        // If 'left' has reached the beginning of the array, or the value to the right of 'right' is greater than the value to the left of 'left', move 'right' to the right.
        if (left == 0 || (right < nums.length - 1 && nums[right + 1] > nums[left - 1])) {
            right++;
        } else {
            // Otherwise, move 'left' to the left.
            left--;
        }

        // Update 'min_val' by taking the minimum of the current 'min_val', the value at 'left', and the value at 'right'.
        min_val = Math.min(min_val, Math.min(nums[left], nums[right]));

        // Calculate the current score by multiplying 'min_val' by the length of the subarray (right - left + 1), and update 'max_score' if this score is greater.
        max_score = Math.max(max_score, min_val * (right - left + 1));
    }

    // Return the maximum score achieved.
    return max_score;
}