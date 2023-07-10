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
var minDepth = function(root) {
    if(!root){
        return 0
    }
    // Check if both left and right children of the root are null,
    // indicating that there is only one node in the tree
    if(!root.left && !root.right){
        return 1
    }

    if (!root.left) return minDepth(root.right) + 1;
    if (!root.right) return minDepth(root.left) + 1;

    // Calculate the minimum depth of the left and right subtrees & return the minimum + 1
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};