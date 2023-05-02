/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    const product = nums.reduce((val1,val2)=> val1*val2)
    if(product>0){
        return 1
    }
    else if(product<0){
        return -1
    }
    return 0
};