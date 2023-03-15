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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let seenNull = false;
    let queue = [root];
    
    while(queue.length) {
        const next = [];
        
        for(let nextNode of queue) {
            if(!nextNode) seenNull = true;
            else {
                if(seenNull) return false;
                next.push(nextNode.left);
                next.push(nextNode.right);
            }
        }
        queue = next;
    }
    return true;
};