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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
    let amount = 0;

    const traverse = (root, start) => {
        if (!root) {
            return 0;
        }

        let left = traverse(root.left, start)
        let right = traverse(root.right, start)

        // Check if the current node value is equal to the target node value
        if (root.val == start) {
            amount = Math.max(left, right)
            return -1
        }
        // Check if both left and right subtrees have valid times
        else if(left >= 0 && right >= 0){
            return Math.max(left, right) + 1
        }
        // If one of the subtrees has an invalid time
        else{
            // Update the amount with the maximum of the current amount and the absolute difference between left and right times
            amount = Math.max(amount, Math.abs(left - right));
            return Math.min(left, right) - 1;
        }
    }

    traverse(root, start)

    return amount;
};