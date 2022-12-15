/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const sLength = s.length, tLength = t.length;
    if(sLength!=tLength){
        return false
    }
    if (s === t) {
        return true;
    }

    let i = 0, hash1 = {}, hash2= {}
    while(i<sLength){
        const sLetter = s[i]
        const tLetter = t[i]
        // we are replacing the character in the respective hash
        if(!hash1[sLetter]){
            hash1[sLetter] = tLetter
        }
        if(!hash2[tLetter]){
            hash2[tLetter] = sLetter
        }
        // if the value of character in hash doesn't match with the character then we return false
        if(hash1[sLetter] != tLetter || hash2[tLetter] != sLetter){
            return false;
        }
        ++i;
    }
    return true
};