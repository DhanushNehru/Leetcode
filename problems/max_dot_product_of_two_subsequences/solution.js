/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
        const nums1Length = nums1.length;
        const nums2Length = nums2.length;

        // If nums1 is shorter than nums2, swap them to ensure nums1 is the longer array.
        if (nums1Length < nums2Length) {
            return maxDotProduct(nums2, nums1);
        }

        // Initialize a dynamic programming array (dp) to store intermediate results.
        // Initialize it with Number.NEGATIVE_INFINITY to ensure it starts with the smallest possible value.
        const dp = new Array(nums2Length + 1).fill(Number.NEGATIVE_INFINITY);

        for (let i = 0; i < nums1Length; i++) {
            let prev = 0;
            for (let j = 0; j < nums2Length; j++) {
                const tmp = dp[j + 1];

                // Update dp[j + 1] with the maximum of the following four values:
                // 1. The product of nums1[i] and nums2[j], plus the previous value (prev).
                // 2. The product of nums1[i] and nums2[j] (ignoring the previous value).
                // 3. The current dp[j] value (ignoring the current product).
                // 4. The previous dp[j + 1] value (ignoring the current product).

                dp[j + 1] = Math.max(prev + ( nums1[i] * nums2[j] ), nums1[i] * nums2[j], dp[j], dp[j + 1]);
                prev = tmp; // Update prev to the previous value of dp[j + 1] for the next iteration.
            }
        }

        return dp[nums2Length];        
};