/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sLength = s.length, tLength = t.length;

    if(sLength != tLength){
        return false
    }

    for(let i=0;i<sLength;i++){
        // Check if the second string contains the current character
        if(t.includes(s[i])){
            // If found, remove the character from the second string
            t = t.replace(s[i],"")
        }
        else{
            // If the character is not found in the second string, they are not anagrams
            return false
        }
    }

    return true
};