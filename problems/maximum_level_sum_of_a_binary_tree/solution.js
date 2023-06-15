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
var maxLevelSum = function(root) {
    if (!root)
        return 1;
    
    const queue = [root];
    const levels = [];
    
    while (queue.length) {
        const level = [];
        let size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);
            
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        
        levels.push(level.reduce((acc, curr) => acc + curr));
    }
    
    return levels.indexOf(Math.max(...levels)) + 1;
};