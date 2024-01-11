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
var maxAncestorDiff = function(root) {
    
    let diff = 0;

    const helper = (root, minVal, maxVal) => {
        if(root === null){
            return null
        }

        // Update the maximum difference with the absolute difference between the current node's value and the min/max values
        diff = Math.max(diff, Math.max(Math.abs(minVal - root.val), Math.abs(maxVal - root.val)));
        minVal = Math.min(minVal, root.val);
        maxVal = Math.max(maxVal, root.val);

        // Recursively traverse the left and right subtrees
        helper(root.left, minVal, maxVal)
        helper(root.right, minVal, maxVal)
    }

    helper(root, root.val, root.val)

    return diff
};

/** 
Steps:
Initialize the minimum and maximum values to the root node's value.
Traverse the tree using a recursive approach.
Update the minimum and maximum values encountered during the traversal.
At each node, calculate the difference between the current node's value and the updated minimum and maximum values.
Update the global maximum difference if a larger difference is found.
Recursively explore the left and right subtrees.
Return the maximum difference after the traversal
*/