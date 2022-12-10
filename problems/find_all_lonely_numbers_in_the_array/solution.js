/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findLonely = function(nums) {
    nums.sort((a,b)=>a-b)
    let lonelyNumbers = []
    for(let i=0;i<nums.length;i++){
        // condition to check adjacent numbers & if numbers occur only once
        if(nums[i]==nums[i+1] || nums[i]==nums[i-1] || nums[i]==nums[i+1]-1 || nums[i]==nums[i-1]+1){
            continue;
        }
        else{
            lonelyNumbers.push(nums[i])
        }
    }
    return lonelyNumbers;
};