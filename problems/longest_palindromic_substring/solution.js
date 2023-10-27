/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    let res = ""; // Initialize an empty string to store the longest palindromic substring.
    let max = 0; // Initialize a variable to keep track of the maximum palindrome length found.

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= 1; j++) {
            let l = i; // Initialize the left pointer at index i.
            let r = i + j; // Initialize the right pointer at index i or i+1.

            // Start expanding around the center (l, r) while the characters match.
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                let len = r - l + 1; // Calculate the length of the current palindrome.

                if (len > max) { // If the current palindrome is longer than the previous longest one,
                    res = s.substring(l, r + 1); // Update the result to the current palindrome.
                    max = len; // Update the maximum palindrome length.
                }

                l--; // Move the left pointer to the left.
                r++; // Move the right pointer to the right.
            }
        }
    }
    return res; // Return the longest palindromic substring found in the input string.
};