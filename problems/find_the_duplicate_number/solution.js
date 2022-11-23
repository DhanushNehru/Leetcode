/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // creating a new separate array
    let newArray=[]
    for(let i=0;i<nums.length;i++){
        // In this separate array, will add the index values, where the index is based on nums array values
        // If for a previous index if value is present ( as 1 ) would directly return the result
        // else for that index will setting the value as 1

        if(newArray[nums[i]])return nums[i];
        newArray[nums[i]]=1;
    }
};