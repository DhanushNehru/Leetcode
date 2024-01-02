/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {

    // As per this constrain: 1 <= nums[i] <= nums.length
    const frequency = Array(nums.length + 1).fill(0)

    const result = []

    for(num of nums){
        if(frequency[num] >= result.length){
            result.push([]);
        }

        // Push the current number into the subarray at the index determined by the frequency count of that number
        result[frequency[num]].push(num);

        // Increment the frequency count of the current number
        frequency[num]++
    }

    return result;
};