/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    for(let i=0,k=1;i<nums.length;i+=2, k+=2){
        for(let j=i+2,l=k+2;j<nums.length;j+=2,l+=2){
            if(nums[i]>nums[j]){
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
            if(nums[k]<nums[l]){
                let temp = nums[k]
                nums[k] = nums[l]
                nums[l] = temp
            }
        }
    }
    return nums
};