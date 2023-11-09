/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    let left = 0; // left pointer
    let res = 0;  // result

    // Iterate through the characters of the input string 's'
    for (let right = 0; right < s.length; right++) {
        // Check if the current character is the same as the character at the left pointer
        if (s[left] === s[right]) {
            // If they are the same, update the result by adding the length of the current homogenous substring
            res += right - left + 1;
        } else {
            // If the characters are not the same, update the result by adding 1
            res += 1;
            // Move the left pointer to the current position (start of a new substring)
            left = right;
        }
    }

    // Return the result modulo 10^9 + 7 to ensure the result is within the specified range
    return res % (Math.pow(10, 9) + 7);    
};