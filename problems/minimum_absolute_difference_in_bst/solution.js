/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    
    let minDiff = Number.MAX_SAFE_INTEGER;
    let prev = null;
    const findMinDiff = (node) => {
        if(node == null) return null;
        findMinDiff(node.left);
        if(prev != null) minDiff = Math.min(minDiff, node.val - prev)
     
        prev = node.val
        findMinDiff(node.right);
    }
    findMinDiff(root);
    return minDiff
    
};