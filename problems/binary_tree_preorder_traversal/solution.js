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
var preorderTraversal = function(root) {
    const result = []
    
    // Pre order means ROOT | LEFT | RIGHT
    const traversal = (root) => {
        if(root==null){
            return result;
        }
        result.push(root.val)
        traversal(root.left)
        traversal(root.right)
    }

    traversal(root)

    return result;
};