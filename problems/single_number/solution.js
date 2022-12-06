/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let bit = 0;
    for(let i in nums){
        // Bitwise operation XOR
        // Sets each bit to 1 if only one of two bits is 1
        bit^=nums[i] 
    }
    return bit;
};