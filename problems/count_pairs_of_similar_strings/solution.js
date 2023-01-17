/**
 * @param {string[]} words
 * @return {number}
 */

var similarPairs = function(words) {
    let pairs = 0
    const wordsLength = words.length;
    for(let i=0;i<wordsLength;i++){
        // we sort and eliminate duplicates in each word in array
        words[i] = Array.from(new Set(words[i].split('').sort())).join("")
    }
    for(let i=0;i<wordsLength-1;i++){
        for(let j=i+1;j<wordsLength;j++){
            if(words[i] == words[j]){
                ++pairs
            }
        }
    }
    return pairs;
};