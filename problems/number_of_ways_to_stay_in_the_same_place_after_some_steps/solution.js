/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
    let mod = 1_000_000_007; // Define the modulo value for avoiding integer overflow
    arrLen = Math.min(steps, arrLen); // Ensure arrLen doesn't exceed the number of steps

    // Initialize two arrays to store the previous and current states
    let prev = Array(arrLen + 2).fill(0);
    let curr = Array(arrLen + 2).fill(0);

    prev[arrLen] = 1; // Initialize the starting position with 1 way

    for (let j = 1; j < steps + 1; j++) {
        for (let i = 1; i < arrLen + 1; i++) {
            // Calculate the number of ways to reach the current position
            curr[i] = (prev[i - 1] + prev[i] + prev[i + 1]) % mod;
        }

        // Swap 'prev' and 'curr' arrays for the next iteration
        [prev, curr] = [curr, prev];
    }

    return prev[arrLen]; // Return the number of ways to reach the specified position (arrLen)
};
