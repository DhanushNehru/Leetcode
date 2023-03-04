/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
   // sliding window
   let sum = 0;
   let start = 0, minStart = 0, maxStart = 0;
   let minFound = false, maxFound = false;
   for(let i = 0; i < nums.length; i++){
       let num = nums[i]
       if(num < minK || num > maxK){
           minFound = false;
           maxFound = false;
           start = i+1;
       }

       if(num === minK){
           minFound = true
           minStart = i;
       }

       if(num === maxK){
           maxFound = true
           maxStart = i;
       }

       if(minFound && maxFound){
           sum += (Math.min(minStart, maxStart) - start+1)
       }
   }
   return sum
};