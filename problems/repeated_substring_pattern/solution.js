/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    // Repeat string
    // remove 1st and last char
    // check if we still have original string as part of this new string
    return s.repeat(2).slice(1, -1).includes(s)
};