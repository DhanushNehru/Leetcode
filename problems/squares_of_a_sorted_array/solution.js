/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squaredNums = nums.map((num)=> num*num )
    return squaredNums.sort((a,b)=> (a-b))
};