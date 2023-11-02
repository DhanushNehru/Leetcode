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
var averageOfSubtree = function(root) {
    let result = 0
    
    const find = (root) => {
        if(root == null){
            return [0, 0]
        }

        // for each node we are calculating the sum and total count
        const [leftSum, leftCount] = find(root.left);
        const [rightSum, rightCount] = find(root.right);

        const currSum = root.val + leftSum + rightSum;
        const currCount = 1 + leftCount + rightCount

        // value of the node is equal to the average of the values in its subtree.
        if (Math.floor(currSum / currCount) === root.val) result++;

        return [currSum, currCount]
    }
    find(root)

    return result
};