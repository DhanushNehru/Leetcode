/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let result = "";

    for(let i=0;i<nums.length;i++){
        // Check if the character at the current position is "0"
        // If true, append "1" to the result; otherwise, append "0"
        result += nums[i][i] == "0" ? '1' : '0';
    }
    
    return result;
};