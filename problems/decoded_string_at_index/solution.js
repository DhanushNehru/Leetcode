/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
    // Initialize variables to keep track of the current length and position in the string.
    let length = 0; // Current length
    let i = 0;     // Current position in the string

    // Iterate through the string until the desired length (k) is reached or exceeded.
    while (length < k) {
        if (!isNaN(s[i])) {
            // If the character at position i is a digit, multiply the current length by that digit.
            length *= Number(s[i]);
        } else {
            // If the character is not a digit (i.e., a letter), increment the current length by 1.
            length++;
        }
        i++; // Move to the next character in the string.
    }

    console.log(" LENGTH ", length)
    console.log(" I ", i)

    // Backtrack to find the character at position k.
    for (let j = i - 1; j >= 0; j--) {
        if (!isNaN(s[j])) {
            // If the character at position j is a digit, adjust the length and k accordingly.
            length /= Number(s[j]);
            k %= length;
        } else {
            // If the character is not a digit (i.e., a letter), check if k matches the current length.
            if (k === 0 || k === length) {
                return s[j]; // Return the character at position j.
            }
            length--; // Decrement the length when encountering a letter.
        }
    }

    // If no character is found, return an empty string.
    return "";
};
