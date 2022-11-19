/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
   const indexPositon = word.indexOf(ch) + 1
   return word.slice(0, indexPositon).split("").reverse().join("") + word.slice(indexPositon)
};