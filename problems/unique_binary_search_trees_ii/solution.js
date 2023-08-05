/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    // Define a helper function 'generateTree' which takes parameters: 'n' (total number of nodes),
    // 'l' (left boundary for node values), 'r' (right boundary for node values), and 'res' (result array).
    const generateTree = (n, l = 1, r = n, res = []) => {
        // Iterate through the range from 'l' to 'r'.
        for (let i = l; i <= r; i++) {
            // Iterate through each possible left subtree generated recursively.
            for (const left of generateTree(n, l, i - 1)) {
                // Iterate through each possible right subtree generated recursively.
                for (const right of generateTree(n, i + 1, r)) {
                    // Push the current node (with value 'i', and left and right subtrees) to the result array.
                    res.push({ val: i, left, right });
                }
            }
        }
        // Return the result array containing all possible trees.
        // If 'n' is non-zero and the result array is empty, return an array with a single 'null' node.
        return n ? (res.length ? res : [null]) : [];
    };
    // Call the 'generateTree' function with parameter 'n' and return the result.
    return generateTree(n);
};