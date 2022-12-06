/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    // first we get the index of nums array of operations[i][0]
    // then we replace the element in nums array index with operations[i][1]
    for(let i=0;i<operations.length;i++){
        nums.splice(nums.indexOf(operations[i][0]), 1, operations[i][1])
    }
    return nums;
};