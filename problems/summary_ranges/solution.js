/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
     for(let i=1;i<nums.length;i++) {
        let times = 0
        while(nums[i]-nums[i-1] ==1) {
            times++
            // splice overwrites the original array
            nums.splice(i-1,1)
        }
        if (times>0) {
            // we replace the array element with the ranges
            // [0,1,2,4,5,7]
            // [ '0->2', 4, 5, 7 ]
            // [ '0->2', '4->5', 7 ]
            nums[i-1] = `${nums[i-1] - times}->${nums[i-1]}`
        }
    }
    // one of the array element will still be an integer so we neet to convert it into a string
    return nums.map(e=>String(e))
};