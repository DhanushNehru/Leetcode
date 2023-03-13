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
 * @return {boolean}
 */
const isMirror = (left, right) => {
    if (!left && !right) {
        return true;
    }
    if (!left || !right) {
        return false;
    }
    if (left.val !== right.val) {
        return false;
    }
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}

var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    return isMirror(root.left, root.right);
};