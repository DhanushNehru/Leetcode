/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let hash = {}
    for(let i=0;i<nums.length;i++){
        // if a number occurs more than once we increment its hash count
        // if a hash doesnt exist in the iteration we assign 0 value
        hash[nums[i]] = ++hash[nums[i]] | 0
        // if the count is greater than or equal to 1 it means the element is repeated
        if(hash[nums[i]]>=1){
            return nums[i]
        }
    }
};