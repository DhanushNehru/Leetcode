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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;

    const depthFirstSearch = (node) => {
        if(node == null) return

        let nodeValue = node.val;
        if(nodeValue >=low && nodeValue <=high) sum+=nodeValue
        // in dfs approach we check whether the left most node has any value then traverse to the right
        depthFirstSearch(node.left)
        depthFirstSearch(node.right)
    }
    
    depthFirstSearch(root)
    return sum;
};