/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    let dp = new Array(nums1.length+1);
    dp[0] = new Array(nums2.length+1);
    for (let i = 0; i< nums1.length; i++){
        dp[i+1] = new Array(nums2.length+1);
        for (let j = 0; j< nums2.length; j++){
            if (nums1[i]===nums2[j]) {
                dp[i+1][j+1] = (dp[i][j]||0)+1;
            }
            else{
                dp[i+1][j+1] = Math.max(dp[i][j+1]||0, dp[i+1][j]||0);
            } 
        }
    }
    return dp[nums1.length][nums2.length];
}