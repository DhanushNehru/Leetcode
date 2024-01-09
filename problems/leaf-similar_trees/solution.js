/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    // Arrays to store leaf node values for each tree
    const rootANodeList = [], rootBNodeList = [];
    
    const dfs = (root, rootNodeList) => {
        if (root == null) {
            return null; 
        }
        
        // If the current node is a leaf node, add its value to the corresponding array
        if (root.left == null && root.right == null) {
            rootNodeList.push(root.val);
        }
        // Recursive calls for the left and right children if the current node is not a leaf
        else {
            dfs(root.left, rootNodeList)
            dfs(root.right, rootNodeList)
        }
    };

    // Call the DFS function for each tree to collect leaf node values
    dfs(root1, rootANodeList)
    dfs(root2, rootBNodeList)

    return rootANodeList.toString() == rootBNodeList.toString()
};