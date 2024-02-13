/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // Ensure that the rotation value k is within the range of the array length
    k = k % nums.length; // Calculate the modulo of k with the length of the array

    // Perform the rotation by removing the last k elements and adding them to the beginning of the array
    nums.splice(0, 0, ...nums.splice(nums.length - k)); // Remove the last k elements and add them at the beginning
};