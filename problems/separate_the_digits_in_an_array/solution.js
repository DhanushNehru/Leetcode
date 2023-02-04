/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const result = []
    for(let i=0;i<nums.length;i++){
        let digit;
        if(nums[i]+''.length>=2){
            digit=nums[i]+''.split('').map((num)=>parseInt(num))
            result.push(...digit)
        }
        else{
            digit=nums[i]
            result.push(digit)
        }
    }
    return result;
};