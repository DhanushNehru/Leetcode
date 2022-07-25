/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1.sort((a,b)=> a-b)
    nums2.sort((a,b)=> a-b)
    let arr=[]
    let pointer1= nums1.length -1;
    let pointer2= nums2.length -1;
    const set = new Set();
    while(pointer1>=0 && pointer2>=0){
        if(nums1[pointer1]>nums2[pointer2]){
            --pointer1;
        }
        else if(nums1[pointer1]<nums2[pointer2]){
            --pointer2;
        }
        else{
            set.add(nums1[pointer1])
            --pointer1;
            --pointer2;
        }
    }
    return [...set]
};