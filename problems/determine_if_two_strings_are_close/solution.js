/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    const word1Length = word1.length, word2Length = word2.length

    // If the lengths are not equal, the words cannot be "close"
    if(word1Length != word2Length){
        return false
    }

    const word1Freq = {}, word2Freq = {}
    for(let i=0; i<word1Length; i++){
        // If the current character is not present in the second word, they cannot be "close"
        if(word2.indexOf(word1[i]) == -1){
            return false
        }
        word1Freq[word1[i]] = word1Freq[word1[i]] ? word1Freq[word1[i]] + 1 : 1
        word2Freq[word2[i]] = word2Freq[word2[i]] ? word2Freq[word2[i]] + 1 : 1
    }

    // Check if the sorted frequency arrays of both words are equal
    return Object.values(word1Freq).sort().toString() == Object.values(word2Freq).sort().toString()
};

/*
Check if both words are of same length, if not return False
Check if both words have same alphabets (by comparing set(word1) and set(word2)
Make two lists having count of all alphabets one for word1 and one for word2, sort the lists, check if the lists are equal, if yes return True, else return False
*/