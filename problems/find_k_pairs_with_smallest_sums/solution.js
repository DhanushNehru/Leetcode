/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
   // Return an empty array if we are given an empty array
  if (nums1.length === 0 || nums2.length === 0) return []
  
  // Initialize variables
  let arr = []; // arr will be an array holding a series of objects
  let max = -Infinity; // max will track the largest sum currently in arr
  
  // Loop through nums1
  for (let i = 0; i < nums1.length; i++) {
      // Loop through nums2
      for (let j = 0; j < nums2.length; j++) {
          
          // Before the conditional statements, create an object based on nums1[i] and nums2[j]
          let obj = {
              sum: nums1[i] + nums2[j], // holds the value of the numbers' sum
              nums: [nums1[i], nums2[j]] // holds array of the corresponding numbers
          }
          
          // If obj.sum is greater than max AND arr already has k values...
          if (obj.sum >= max && arr.length >= k) {
              break; // break.  This is to save time.
          } 
          
          // Else, if obj.sum is less than or equal to max and our array has fewer than k elements...
          else if (obj.sum <= max && arr.length < k) {
              arr.push(obj); // ...push obj into arr.
          } 
          
          // Else, if obj.sum is greater than max and our array has fewer than k elements... 
          else if (obj.sum > max && arr.length < k) {
              max = obj.sum; // ...set the new max to obj.sum... 
              arr.push(obj); // ...and push obj into arr.
          } 
          
          // Else, if obj.sum is less than max AND arr has k or more elements...
          else if (obj.sum < max && arr.length >= k) {
              // We need to: 
                  // (1) remove one element where sum equals max
                  // (2) replace that element with obj
                  // (3) Set max to the new highest value sum in our array.
              
              let newMax = -Infinity;  // Holds the value to be set to max.
              let replaced = false;   // Tracks if we have completed steps (1) and (2).
              
              for (let n = 0; n < arr.length; n++) {
                  // This if statement takes care of steps (1) and (2)
                  if (!replaced && arr[n].sum === max) {
                      arr[n] = obj;
                      replaced = true;
                  }
                  // This if statement takes care of step (3)
                  if (arr[n].sum > newMax) newMax = arr[n].sum
              }
              // After we have iterated through all elements in arr, sets the highest value sum as our new max.
              max = newMax;
          } 
      }
  }
  
  // Converts arr into the form we need to return it in.
  // ... Since arr is currently an array of objects, this changes arr to hold just the needed pairs.
  return arr.map(obj => obj.nums);
};