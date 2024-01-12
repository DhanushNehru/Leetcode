/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = "aeiouAEIOU", sLength = s.length;
    let firstHalfVowelCount = 0, secondHalfVowelCount = 0;
    for(let i=0; i<sLength/2; i++){
        if(vowels.includes(s[i])){
            ++firstHalfVowelCount
        }
        if(vowels.includes(s[sLength-i-1])){
            ++secondHalfVowelCount
        }
    }

    return firstHalfVowelCount == secondHalfVowelCount
};