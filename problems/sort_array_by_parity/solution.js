/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    for(let i=0;i<nums.length;i++){
        let num = nums[i]
        if(num%2 == 0){
            nums.splice(i,1)
            nums.unshift(num)
        }
    }
    return nums;
};