/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    // Define a constant for modulo arithmetic
    const mod = 1e9 + 7;
    
    // Sort the input array in ascending order
    arr.sort((a, b) => a - b);

    // Initialize a variable to store the answer
    let ans = 0;

    // Create a map to store the number of ways to form each number
    const map = new Map();

    // Iterate through each number 'x' in the sorted array
    for (const x of arr) {
        // Initialize the number of ways to form 'x' as 1
        let ways = 1;

        // Calculate the square root of 'x' (used for optimization)
        const max = Math.sqrt(x);

        // Iterate through the elements of the array for possible divisors
        for (let j = 0, left = arr[0]; left <= max; left = arr[++j]) {
            // Check if 'left' is a divisor of 'x'
            if (x % left !== 0) continue;

            // Calculate the corresponding right divisor
            const right = x / left;

            // Check if the right divisor is in the map
            if (map.has(right)) {
                // Update the number of ways using the formula
                ways = (ways + map.get(left) * map.get(right) * (left === right ? 1 : 2)) % mod;
            }
        }

        // Store the number of ways to form 'x' in the map
        map.set(x, ways);

        // Update the answer by adding the ways to form 'x'
        ans = (ans + ways) % mod;
    }

    // Return the final answer
    return ans;
};
