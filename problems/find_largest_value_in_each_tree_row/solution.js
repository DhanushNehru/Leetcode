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
var largestValues = function(root) {
    const res = [];
    if (!root) {
      return res;
    }

    const queue = [];
    queue.push(root);

    while(queue.length > 0){
        let max_val = Number.NEGATIVE_INFINITY;
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            // NODE  [1,3,2,5,3,null,9]
            // NODE  [3,5,3]
            // NODE  [2,null,9]
            // NODE  [5]
            // NODE  [3]
            // NODE  [9]

            max_val = Math.max(max_val, node.val);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        res.push(max_val);
    }

    return res;
};