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

var findMode = function(root) {
    // Create an empty object to store the frequency of each value in the tree
    let hash = {};

    // Recursive function to traverse the binary tree and populate the frequency hash
    const find = (root) => {
        if (root != null) {
            // If the value already exists in the hash, increment its frequency; otherwise, initialize it to 1
            hash[root.val] = hash[root.val] ? hash[root.val] + 1 : 1;

            // Recursively process the left and right subtrees
            find(root.left);
            find(root.right);
        }
    }

    // Start the frequency counting by calling the recursive function
    find(root);

    let maxFrequency = 0;
    
    // Find the maximum frequency encountered
    for (const key in hash) {
        maxFrequency = Math.max(maxFrequency, hash[key]);
    }

    const highestFrequency = []

    // Iterate through the hash to find the element with the highest frequency
    for (const key in hash) {
        if (hash[key] == maxFrequency) {
            highestFrequency.push(key)
        }
    }

    // Return an array containing the most frequently occurred element
    return highestFrequency;
};


