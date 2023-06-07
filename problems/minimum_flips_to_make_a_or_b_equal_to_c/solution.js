/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */

// Function to count the number of '1's in the binary representation of a number
const countOnes = (n) => {
    return n.toString(2).split('').filter(a => a==='1').length;
}

var minFlips = function(a, b, c) {
    // Calculate the bitwise XOR of a and b, then perform a bitwise OR operation with c
    // The result represents the positions where at least one of a or b has a different bit than c
    const t = (a | b) ^ c;
    
    // Count the number of '1's in t using the countOnes function
    // This represents the number of positions that need to be flipped to satisfy the condition
    let flips = countOnes(t);
    
    // Perform a bitwise AND operation between a, b, and t
    // The result represents the positions where both a and b have '1' and t has '1'
    const commonOnes = a & b & t;
    
    // Count the number of '1's in the commonOnes using the countOnes function
    // This represents the additional number of positions that need to be flipped to satisfy the condition
    flips += countOnes(commonOnes);
    
    // Return the total number of flips required
    return flips;
};