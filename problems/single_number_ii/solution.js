/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = {};
    for(let i in nums){
        // we create a hash and set the count values for each number in array
        hash[nums[i]] = hash[nums[i]]==undefined ? 1 : ++hash[nums[i]];
    }
    // if an element has occurred only once then the count of it will be one
    for(let i in hash){
        if(hash[i]==1){
            return i
        }
    }
};