/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let result = nums[0];
    let temp = 0;
    for(let i=0;i<nums.length;i++){
        let noOfTimes = 0;
        for(let j=i;j<nums.length;j++){
            if(nums[i]==nums[j]){
                ++noOfTimes
            }
        }
        if(noOfTimes>temp){
            result=nums[i]
            temp = noOfTimes;
        }
    }
    return result;
};