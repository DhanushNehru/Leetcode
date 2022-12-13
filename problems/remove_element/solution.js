/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index =0;
    for(let i=0;i<=nums.length-1;i++){
        if(nums[i]!==val){
            nums[index++]=nums[i]
        }
    }
    return index
};