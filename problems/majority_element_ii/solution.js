/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    // Create an empty object 'hash' to store counts of elements.
    const hash = {}

    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 0
        }
        hash[nums[i]]++
    }

    // Create an empty array 'result' to store the majority elements.
    const result = []

    // Calculate the minimum number of times an element should appear to be a majority element.
    const appear = nums.length / 3

    for (const val in hash) {
        // Check if the count of the current element is greater than the calculated threshold.
        if (hash[val] > appear) {
            // If it is, parse the property 'val' as an integer and push it to 'result'.
            result.push(parseInt(val))
        }
    }

    // Return the 'result' array containing majority elements.
    return result;
};