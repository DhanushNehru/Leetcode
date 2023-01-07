/**
 * @param {number[]} nums
 * @return {number}
 */
var xorBeauty = function(nums) {
  // Initialize the result with first element of array
  let result = nums[0];
    
  for (let i = 1; i < nums.length; i++) {
    // entire logic depends on this xor condition
    result^= nums[i]
  }

  return result;
};