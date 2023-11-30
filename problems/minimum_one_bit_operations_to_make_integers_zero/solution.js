/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function(n) {
    // Initialize a variable 'm' to keep track of the minimum operations.
    let m = n;
    
    // Continue the loop until 'n' becomes 0.
    while (n) {
        // Right shift 'n' by 1, and perform a bitwise XOR with 'm'.
        // >> Signed right shift: Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
        m ^= (n >>= 1);
    }
    
    // Return the final result, which represents the minimum number of one-bit operations.
    return m;
};

/*
Eg: n = 10 , Binary = 1010
Right shift n by 1: n >>= 1 (binary: 0001)

First iteration:
Right shift n by 1: n >>= 1 (binary: 0101)
XOR the result with m: m ^= 0101 (binary: 1111)
Updated values:
n = 5 (binary: 0101)
m = 15 (binary: 1111)

Second iteration:
Right shift n by 1: n >>= 1 (binary: 0010)
XOR the result with m: m ^= 0010 (binary: 1101)
Updated values:
n = 2 (binary: 0010)
m = 13 (binary: 1101)

Third iteration:
Right shift n by 1: n >>= 1 (binary: 0001)
XOR the result with m: m ^= 0001 (binary: 1100)
Updated values:
n = 1 (binary: 0001)
m = 12 (binary: 1100)

Fourth iteration:
Right shift n by 1: n >>= 1 (binary: 0000)
XOR the result with m: m ^= 0000 (binary: 1100)
Updated values:
n = 0 (binary: 0000)
m = 12 (binary: 1100)

*/