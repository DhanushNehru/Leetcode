/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a,b)=>(a-b));
    nums2.sort((a,b)=>(a-b));
    // console.log(nums1,nums2);
    let arr=[]
    let i=nums1.length-1;
    let j=nums2.length-1;
    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            i--;
        }
        else if(nums1[i]<nums2[j]){
            j--
        }
        
        if(nums1[i]==nums2[j]){
            arr.push(nums1[i])
            i--;
            j--;
        }
    }
    return arr;
};