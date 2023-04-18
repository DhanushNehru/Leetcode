/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let pointer1 = 0; pointer2 = 0, result = "";
    while(pointer1<=word1.length || pointer2<=word2.length){
        if(pointer1 < word1.length){
            result+=word1[pointer1] 
        }
        ++pointer1;
        if(pointer2 < word2.length){
            result+=word2[pointer2]
        }
        ++pointer2;
    }
    return result;
};