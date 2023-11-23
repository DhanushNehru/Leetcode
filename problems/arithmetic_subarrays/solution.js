/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
const check = (arr) => {
    arr.sort((a, b) => a - b); // Sort the array
    let diff = arr[1] - arr[0]; // Calculate the difference between the first two elements

    // Check if the difference remains the same for consecutive elements
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            return false; // If the difference changes, it's not an arithmetic sequence
        }
    }

    return true; // If all differences are the same, it's an arithmetic sequence
}

var checkArithmeticSubarrays = function(nums, l, r) {
    const ans = [];

    // Iterate through the ranges and check each subarray
    for (let i = 0; i < l.length; i++) {
        const arr = nums.slice(l[i], r[i] + 1); // Extract the subarray from nums using the given range [l[i], r[i]]
        ans.push(check(arr)); // Check if the subarray forms an arithmetic sequence
    }

    return ans; // Return the results for each subarray    
};