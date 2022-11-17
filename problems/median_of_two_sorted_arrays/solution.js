/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   const result = [nums1,nums2].flat().sort((a,b)=> a-b )
   const length = result.length;
   const index = Math.floor(length/2)
   if(length%2 == 1){
       return result[index]
   }
   else{
       return (result[index-1] + result[index]) / 2
   }
};