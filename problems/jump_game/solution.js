/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let distance = 0;
    for (let i = 0; i <= distance; i++) {
        // since index starts from 0, to calculate distance jump we give i + nums[i]
        distance = Math.max(distance, i + nums[i]);
        if (distance >= nums.length-1) {
            return true;
        }
    }
    return false;
};