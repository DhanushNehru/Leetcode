/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = nums1.length - 1; i >= 0; i--) {
        if (p1 >= 0 && nums1[p1] >= nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else if (p2 >= 0) {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    
};