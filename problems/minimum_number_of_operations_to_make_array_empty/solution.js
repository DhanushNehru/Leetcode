/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const hash = {}

    for(let i=0;i<nums.length;i++){
        hash[nums[i]] = hash[nums[i]] ? hash[nums[i]] + 1 : 1 
    }

    let minNoOfOperations = 0
    for( key in hash){
        const value = hash[key];

        // If a number occurs only once, return -1 as it cannot be operated.
        if(value == 1){
            return -1
        }
       
        // Add one-third of the frequency to 'minNoOfOperations'
        minNoOfOperations += Math.floor( value / 3)

        // If there is a remainder, add an extra operation.
        if(value % 3 !== 0){
            minNoOfOperations++
        }
    }
    return minNoOfOperations
};