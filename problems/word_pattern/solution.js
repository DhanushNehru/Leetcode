/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

// similar to problem https://leetcode.com/problems/isomorphic-strings/

var wordPattern = function(pattern, s) {
    const sArray = s.split(" ")
    const patternArray = pattern.split("")

    const sArrayLength = sArray.length, patternArrayLength = patternArray.length;
    if(sArrayLength != patternArrayLength){
        return false;
    }
    let i=0, hash1 = {}, hash2 = {}
    while(i<sArrayLength){
        const sArrayValue = sArray[i], patternArrayValue = patternArray[i]
        if(!hash1[sArrayValue]){
            hash1[sArrayValue] = patternArrayValue
        }
        if(!hash2[patternArrayValue]){
            hash2[patternArrayValue] = sArrayValue
        }
        if((hash1[sArrayValue] != patternArrayValue) || (hash2[patternArrayValue] != sArrayValue) ){
            return false;
        }
        ++i
    }
    return true;
}