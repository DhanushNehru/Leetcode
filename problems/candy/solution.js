/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;

    // Condition 1: Each child must have at least one candy

    // Create a new array 'candies' of the same length as 'ratings' and initialize it with 1 candy for each child.
    const candies = new Array(n).fill(1);

    // Condition 2: Children with a higher rating get more candies than their neighbors.

    // First Pass: Traverse the 'ratings' array from left to right.
    for (let i = 1; i < n; i++) {
        // If the current child's rating is higher than the previous child's rating,
        if (ratings[i] > ratings[i - 1]) {
            // Give this child more candies than the previous one.
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Second Pass: Traverse the 'ratings' array from right to left.
    for (let i = n - 2; i >= 0; i--) {
        // If the current child's rating is higher than the next child's rating,
        if (ratings[i] > ratings[i + 1]) {
            // Ensure that this child has at least as many candies as the next child, by taking the maximum of its current value and (next child's candies + 1).
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // Calculate the total number of candies by summing up the 'candies' array.
    return candies.reduce((a, b) => a + b, 0);
};
