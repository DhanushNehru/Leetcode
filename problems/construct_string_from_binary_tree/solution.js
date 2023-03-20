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
 * @return {string}
 */
var tree2str = function(root) {
    // preorder >> root left right

    const preOrder = (root) => {

        if (!root) {
            return ''; // sanity check
        }
        
        const val = root.val
        const left = preOrder(root.left)
        const right = preOrder(root.right)


        if (!left && !right) {
            return `${val}`; // both left and right are empty
        }
        if (!right) {
            return `${val}(${left})`; // right is empty, keep the left
        }
        return `${val}(${left})(${right})`; // left and right are not empty
    }
    

    return preOrder(root)

};