/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const result = [], map = new Map()

    nums.forEach((num) => map.set(num, map.get(num)+1 || 1))

    // map =>   { 1 => 3, 2 => 2, 3 => 1 }
    // sorted based on the frequency of elements
    const sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

    for(let i=0;i<k;i++){
        result.push(sortedArray[i][0])
    }

    return result;
};