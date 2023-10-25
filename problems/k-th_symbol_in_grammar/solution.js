/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// values
// #1                 0
// #2        0                   1
// #3   0         1         1         0
// #4 0   1     1   0     1   0     0   1
        
// element 1-based index
// #1                 1
// #2        1                   2
// #3   1         2         3         4
// #4 1   2     3   4     5   6     7   8

var kthGrammar = function(n, k) {
    // Base case: If n is 1, return 0 (as specified in the problem statement).
    if (n === 1) {
        return 0;
    }

    // For other values of n, recursively call the kthGrammar function with n-1 and the new k value.
    // The new k value is calculated as Math.floor((k+1) / 2).
    const parent = kthGrammar(n-1, Math.floor((k+1) / 2) );
    // Math.floor((k+1) / 2) is a mathematical formula that calculates the position of an element in the parent row based on its position in the current row. T

    // Check if k is even.
    if (k % 2 === 0) {
        // If k is even and the parent is 1, return 0. Otherwise, return 1.
        return parent === 1 ? 0 : 1;
    } else {
        // If k is odd, return the value of the parent directly.
        return parent;
    }
};
