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
var longestZigZag = function(root) {
    let path = 0
    const dfs = (node, len, prevDirection) => {
        if (!node) return;
        path = Math.max(path, len)
        dfs(node.left, prevDirection == 1 ? len + 1 : 1, 0)
        dfs(node.right, prevDirection == 0 ? len + 1 : 1, 1)
    }
    dfs(root, 0, -1)
    return path
};