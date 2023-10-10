/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    nums.sort((a,b)=>a-b)
    let n = nums.length;
    nums = [...new Set(nums)]; 

    let ans = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        // 's' represents the current element in the sorted 'nums' array
        let s = nums[i];
        // 'e' represents the end element of the subarray starting from 's'
        let e = s + n - 1;
        // Find the index of 'e' using a binary search
        let idx = binarySearch(nums, e);
        // Calculate the minimum number of operations required to make the subarray consecutive
        ans = Math.min(ans, n - (idx - i));
    }

    return ans;
};

const binarySearch = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}