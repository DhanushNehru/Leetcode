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
var allPossibleFBT = function(n) {
    if(n%2 == 0) return [];

    let memo = {"1": [new TreeNode()]};

    for (let i = 3; i <= n; i += 2) {
        for(let j = 1; j < i; j += 2) {
            memo[j].forEach( pbt_memo_1 => {
                memo[i - 1 - j].forEach( pbt_memo_2 => {
                    if(memo[i] === undefined) memo[i] = [];
                    memo[i].push(new TreeNode(0, pbt_memo_1, pbt_memo_2));
                })
            })
        }
    }

    return memo[n];    
};