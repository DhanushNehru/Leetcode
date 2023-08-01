/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    const comb = [];

    function backtrack(start) {
        if (comb.length === k) {
            res.push([...comb]);
            return;
        }

        for (let num = start; num <= n; num++) {
            comb.push(num);
            backtrack(num + 1);
            comb.pop();
        }
    }

    backtrack(1);
    return res;   
};