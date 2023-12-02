/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let resultSum = 0
    for(const word of words){
        if( isGoodString(word, chars)){
            resultSum += word.length; 
        }
    }
    return resultSum;
};

const isGoodString = (word, chars) => {
    const map = new Map()

     // Populate the map with the frequency of each character in 'chars'
    for(const ch of chars){
        if(map.get(ch) == undefined){
            map.set(ch, 1)
        }       
        else{
            map.set(ch,  map.get(ch) + 1 )
        }
    }

    for(const letter of word){
        // Check if the letter is present in the map and has a positive frequency
        if( map.has(letter) &&  map.get(letter)>0){
            // If yes, decrement the frequency of the letter in the map
            map.set(letter, map.get(letter) - 1)
        }
        else{
            // If the letter is not present or has zero frequency, the word is not valid
            return false;
        }
    }
    return true;
}