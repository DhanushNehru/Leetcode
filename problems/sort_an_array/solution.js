/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length < 2) return nums

    let middle = Math.floor(nums.length / 2), left = nums.slice(0, middle), right = nums.slice(middle)

    return merge(sortArray(left), sortArray(right))
};

var merge = (left, right) => {
    const sortedArray = []
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sortedArray.push(left.shift())
        }else {
            sortedArray.push(right.shift())
        }
    }

    return [...sortedArray, ...left, ...right]
}