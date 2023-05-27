/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;
    const memo = new Map();
    const sums = new Array(n).fill(0);
	
    sums[n - 1] = piles[n - 1];
    
    for (let i = n - 2; i >= 0; i--) {
        sums[i] = sums[i + 1] + piles[i]; // (1)
    }
    
    return findMax(0, 1);
    
    function findMax(index, M) { // (2)
        const key = `${index}#${M}`;
        
        // base case
        if (n - index <= 2 * M) return sums[index]; // (3)
        if (memo.has(key)) return memo.get(key);
        
        let res = Number.MIN_SAFE_INTEGER;
        
        for (let x = 1; x <= 2 * M; x++) { // (4)
            const newM = Math.max(x, M); // (5)
            res = Math.max(res, sums[index] - findMax(index + x, newM)); // (6)
        }
        
        memo.set(key, res);
        return res;
    }
};