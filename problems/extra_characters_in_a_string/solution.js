/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    // Dynamic Programming

    // Calculate the maximum possible value for dp array
    const maxVal = s.length + 1;

    // Create an array dp to store the minimum number of extra characters needed
    const dp = Array(s.length + 1).fill(maxVal);
    
    // Initialize dp[0] to 0, since no extra characters are needed for an empty string
    dp[0] = 0;

    // Create a Set from the 'dictionary' array for efficient lookups
    const dictionarySet = new Set(dictionary);

    // Iterate through the characters of the input string 's'
    for (let i = 1; i <= s.length; ++i) {
        // Initialize dp[i] with one more than the previous position,
        // indicating that we may need to add one more character.
        dp[i] = dp[i - 1] + 1;

        // Nested loop to consider substrings of 's' ending at position 'i'
        for (let l = 1; l <= i; ++l) {
            // Check if the substring from (i - l) to 'i' exists in the dictionary
            if (dictionarySet.has(s.substring(i - l, i))) {
                // If it exists, update dp[i] to the minimum of its current value
                // and the value at position dp[i - l], which represents the minimum
                // number of extra characters needed for the substring ending at 'i'.
                dp[i] = Math.min(dp[i], dp[i - l]);
            }
        }
    }

    // The final value in dp[s.length] represents the minimum number of extra
    // characters needed to form the input string 's' using words from the dictionary.
    return dp[s.length];
};
