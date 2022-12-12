/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(original)==-1){
            break
        }
        original *=2
    }
    return original;
};