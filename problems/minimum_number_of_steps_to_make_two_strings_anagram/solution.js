/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const freqS = {}, freqT = {}
    let result = 0
    
    // Loop through each character in strings s and t to get freq of characters
    for(let i=0;i<s.length;i++){
        freqS[s[i]] = freqS[s[i]] ? freqS[s[i]] + 1 : 1
        freqT[t[i]] = freqT[t[i]] ? freqT[t[i]] + 1 : 1
    }

    // Loop through each unique character in string t
    for(let val in freqT){
        if(freqS[val] == undefined){
            result += freqT[val]
        }
        // If the freq of the char in string s is less than the freq in str t, add the diff to the result
        else if(freqS[val] < freqT[val]){
            result += freqT[val] - freqS[val]
        }
    }

    // Return the final result (minimum steps)
    return result
};