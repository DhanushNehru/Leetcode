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
var minDiffInBST = function(root) {
    if (!root) return 0;
    let precessor = null;
    let min = Infinity;
    var inorder = function(root){
        if (!root) return;
        //traverse tree and get val and tell difference
        inorder(root.left);
        if (precessor){
            min = Math.min(root.val - precessor.val, min); // no need abs,root.val always>processor.val
        }
        precessor = root;
        inorder(root.right);
    }
    inorder(root);
    return min;
};