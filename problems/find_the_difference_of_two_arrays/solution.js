/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set = [new Set(nums1) , new Set(nums2)];
    
    return [[...set[0]].filter(x => !set[1].has(x)),[...set[1]].filter(x => !set[0].has(x))];
};