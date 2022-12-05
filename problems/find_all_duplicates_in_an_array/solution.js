/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let hash = {}
    let resultArr = []
    for(let i=0;i<nums.length;i++){
        if(hash[nums[i]]==undefined){
            hash[nums[i]] = nums[i]
        }
        else{
            resultArr.push(nums[i])
        }
    }
    return resultArr;
};