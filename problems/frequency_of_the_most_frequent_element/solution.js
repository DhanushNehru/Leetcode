/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    // solution by using sliding window
    nums.sort((a,b)=> a-b)
    let start = 0, sum = 0, maxLengthFrequency = 0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
        // the sum >= current element * the size of window
        if( (sum + k) >= (nums[i] * (i-start+1)) ){
            maxLengthFrequency = Math.max(maxLengthFrequency, i-start+1 )
        }
        else{
            sum -= nums[start];
            start += 1;
        }
    }
    return maxLengthFrequency;
};