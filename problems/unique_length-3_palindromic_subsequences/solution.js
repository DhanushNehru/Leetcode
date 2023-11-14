/**
 * @param {string} s
 * @return {number}
 */

var countPalindromicSubsequence = function(s) {
    // Initialize the result variable to store the count of palindromic subsequences
    let result = 0;

    // Create a set to store unique characters in the string
    const uniqueCharacters = new Set(s);

    // Iterate over each unique character in the set
    for (const c of uniqueCharacters) {
        // Find the first occurrence (start index) and last occurrence (end index) of the current character
        const start = s.indexOf(c);
        const end = s.lastIndexOf(c);

        // Check if there are multiple occurrences of the current character in the string
        // we are checking based on first and last characters which are same, if it is same then it satisfies the palidrome condition
        if (start < end) {
            // Calculate the number of palindromic subsequences between the first and last occurrence
            result += new Set(s.slice(start + 1, end)).size;
            
        }
    }

    // Return the final count of palindromic subsequences
    return result;
};