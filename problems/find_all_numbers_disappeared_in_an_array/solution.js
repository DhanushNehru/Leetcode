/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let value = {};
    let resultArr =[];
    // We map values so that we get a unique set of key values
    for(let i=0;i<nums.length;i++){
        value[nums[i]] = nums[i]
    }
    // we traverse through the whole array and add missing elements in the result array
    for(let i=1;i<=nums.length;i++){
        if(value[i] != i){
            resultArr.push(i)
        }
    }
    return resultArr;
};