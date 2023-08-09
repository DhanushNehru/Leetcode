/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {

    // Helper function to check if it's possible to form pairs with maximum difference <= mid
    const canFormPairs = (nums, mid, p) => {
        let count = 0;
        for (let i = 0; i < nums.length - 1 && count < p;) {
            // Check if the difference between consecutive elements is within the limit (mid)
            if (nums[i+1] - nums[i] <= mid) {
                count++;  // Increment the count of formed pairs
                i += 2;   // Skip the next element since it forms a pair with the current element
            } 
            else {
                i++;  // Move to the next element
            }
        }
        return count >= p;  // Return whether the required number of pairs is formed
    }

    nums.sort((a,b)=> a-b)  // Sort the input array in ascending order

    let left = 0, right = nums[nums.length - 1];  // Initialize left and right pointers for binary search

    while (left < right) {
        let mid = Math.floor(left + ( (right - left) / 2));  // Calculate the middle value
        if (canFormPairs(nums, mid, p)) {
            right = mid;  // Adjust the right pointer if it's possible to form pairs with a smaller maximum difference
        } else {
            left = mid + 1;  // Adjust the left pointer if it's not possible to form pairs with the current maximum difference
        }
    }
    
    return left;  // Return the minimum possible maximum difference
};

