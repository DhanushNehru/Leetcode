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
var sumNumbers = function(root) {
    if(!root) return null;
    let sum = 0;
    
    function traverse(node, num) {
        num += node.val // root-to-leaf path  1 -> 2 represents 12
        if(!node.left && !node.right) sum += parseInt(num); // need to convert into number as num is a concatenated number string
        if(node.left) traverse(node.left, num)
        if(node.right) traverse(node.right, num);
    }
    traverse(root, '');
    return sum;
};