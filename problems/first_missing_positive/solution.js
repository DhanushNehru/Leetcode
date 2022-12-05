/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let value = {}
    // First we get the list of positive integer 
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            value[nums[i]]=nums[i] 
        }
    }
    // The value object will default be sorted when the nums[i] is mapped
    // Eg) For this [3,4,-1,1] the order would be { '1': 1, '3': 3, '4': 4 }
    value = Object.values(value)
    let j;
    // We find the missing smallest positive integer by traversing through the array
    for(j=0;j<value.length;j++){
        if(value[j]!=j+1){
            return ++j;
        }
    }
    return ++j;
};