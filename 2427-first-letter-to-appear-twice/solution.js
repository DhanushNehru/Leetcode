/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let hash = {}

    for(let i=0;i<s.length;i++){
        hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1

        if(hash[s[i]] == 2){
            return s[i]
        }
    }
};
