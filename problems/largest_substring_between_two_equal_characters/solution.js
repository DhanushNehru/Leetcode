/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let longestSubstringLength = -1;

    for(let i=0;i<s.length;i++){
        // Calc the length of substr between the 1st and last occurrence of the current char
       const length = s.lastIndexOf(s[i]) - s.indexOf(s[i])

       longestSubstringLength = Math.max(length,longestSubstringLength )

    }

    return longestSubstringLength == 0 ? -1 : longestSubstringLength - 1
};