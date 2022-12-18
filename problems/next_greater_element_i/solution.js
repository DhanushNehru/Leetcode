/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = []
    for(let i=0;i<nums1.length;i++){
        const index = nums2.indexOf(nums1[i])
        let greaterElement = -1;
        for(let j=index+1;j<nums2.length;j++){
            if(nums2[index]<nums2[j]){
                // if a next greater element occurs we exit the loop
                greaterElement = nums2[j]
                break;
            }    
        }
        result.push(greaterElement)
    }
    return result
};