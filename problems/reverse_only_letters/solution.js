/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const alphabets = [...s.replace(/[^A-Za-z]/g, "")]
    return s.replace(/[A-Za-z]/g, ()=> alphabets.pop())
};