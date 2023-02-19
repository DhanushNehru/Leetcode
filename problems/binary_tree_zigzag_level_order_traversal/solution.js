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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let result = []
    const zigzag = (node, level) => {
        if(node==null){
            return null;
        }
        if(result[level]==null){
            result[level] = []
        }
        if(level%2 == 0){
            result[level].push(node.val)
        }
        else{
            result[level].unshift(node.val)
        }
        zigzag(node.left, level+1)
        zigzag(node.right, level+1)
    }
    zigzag(root, 0)
    return result;
};