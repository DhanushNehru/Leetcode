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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = []

    // Post order means LEFT | RIGHT | ROOT
    const traversal = (root) => {
        if(root==null){
            return result;
        }

        traversal(root.left)
        traversal(root.right)
        result.push(root.val)
    }

    traversal(root)

    return result;
};