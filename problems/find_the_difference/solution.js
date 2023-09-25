/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let asciiSumS = 0, asciiSumT = 0;
    // We treat the string as sum of ASCII characters
    for(let i=0;i<t.length;i++){
        if(i<t.length-1){
            asciiSumS+=s[i].charCodeAt(0)
        }
        asciiSumT+=t[i].charCodeAt(0)
    }
    return String.fromCharCode(asciiSumT-asciiSumS)
};