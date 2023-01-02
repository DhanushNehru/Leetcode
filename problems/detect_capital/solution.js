/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let capitalLetter = 0, smallLetter = 0;
    const wordLength =word.length

    // loop to check the first 2 conditions
    for(let index=0;index<wordLength;index++){
        if(word[index].charCodeAt(0)>=65 && word[index].charCodeAt(0)<=90){
            ++capitalLetter;
        }
        else{
            ++smallLetter;
        }
        if(capitalLetter==wordLength || smallLetter==wordLength){
            return true;
        }
    }
 
    // loop to check the last condition
    for(let index=1;index<wordLength;index++){
        if(word[0].charCodeAt(0) >=65 &&  word[0].charCodeAt(0)<=90 && index>0){
            if(word[index].charCodeAt(0)>=65 && word[index].charCodeAt(0)<=90){
                return false
            }
        }
        else{
            return false;
        }
    }
    return true;
};