/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    // Initialize count variables for 'A' and 'B' colors
    let countA = 0;
    let countB = 0;

    // Loop through the colors array
    for (let i = 0; i < colors.length; i++) {
        // Get the current color at index 'i'
        const x = colors[i];
        let count = 0;

        // Count consecutive occurrences of the current color
        while (i < colors.length && colors[i] === x) {
            i++;
            count++;
        }

        // If the current color is 'A', calculate and update countA
        if (x === 'A') {
            // Subtract 2 from count and ensure it's non-negative
            countA += Math.max(count - 2, 0);
        } 
        // If the current color is 'B', calculate and update countB
        else if (x === 'B') {
            // Subtract 2 from count and ensure it's non-negative
            countB += Math.max(count - 2, 0);
        }

        // Decrement 'i' to continue checking the same color on the next iteration
        i--;
    }

    // Compare counts and determine the winner (true for 'A' and false for 'B')
    return countA > countB;
};