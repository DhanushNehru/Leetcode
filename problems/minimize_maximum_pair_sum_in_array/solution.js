/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    // we first sort in ascending order
    // Sorting the array helps in pairing the smallest elements with the largest ones
    nums.sort((a,b) => a-b)

    let i=0; j=nums.length-1
    
    // as per constrains 1 <= nums [i] <= 105
    let max = 0

    while(i<j){
        // goal is to minimize the sum of the maximum pairs in the array
        const sum = nums[i] + nums[j]
        if(sum > max){
            max = sum
        }
        i++;
        j--;
    }

    return max;
};