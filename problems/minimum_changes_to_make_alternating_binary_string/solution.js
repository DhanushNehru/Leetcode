/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let count0 = 0, count1 = 0;

    for (let i = 0; i < s.length; i++) {
        // Check if the current index is even
        if (i % 2 === 0) {
            // If the current character is '0', increment count1; otherwise, increment count0
            if (s[i] === '0') {
                ++count1;
            } else {
                ++count0;
            }
        } else {
            // If the current character is '1', increment count1; otherwise, increment count0
            if (s[i] === '1') {
                ++count1;
            } else {
                ++count0;
            }
        }
    }

    return Math.min(count0, count1);
};
