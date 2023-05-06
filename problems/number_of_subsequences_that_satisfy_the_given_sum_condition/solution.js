/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const N = nums.length
    // 10^9+7 fulfills both the criteria. It is the first 10-digit prime number and fits in int data type as well
    const MOD = (10 ** 9) + 7;
    nums.sort((a, b) => a - b);
    let count = 0;
    let left = 0;
    let right = N - 1;
    const sqCount = [1];
    for (let i = 1; i < N; i++){
        sqCount.push((sqCount[i - 1] * 2) % MOD);
    }
    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            count = (count + sqCount[right - left]) % MOD
            left++
        } else {
            right--;
        }
    }
    return count % MOD
};