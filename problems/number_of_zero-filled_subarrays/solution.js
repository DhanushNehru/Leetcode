/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let result = 0, count = 0;
    for(num of nums){
        if(num == 0){
            count++
            result+= count
        }
        else{
            count = 0
        }
    }
    return result;
};