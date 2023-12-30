/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const allWords = words.join(""), counts = new Map();

    // Count the occurrences of each character in the string.
    for(char of allWords){
        counts.set(char, (counts.get(char) || 0) + 1);
    }

    let wordsLength = words.length;
    // Check if the count of each character is divisible by the length of the words array.
    for (let val of counts.values()) {
        // If not divisible, characters cannot be made equal.
        if (val % wordsLength !== 0) {
            return false;
        }
    }
    
    return true;
};