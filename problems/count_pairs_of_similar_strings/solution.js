/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let hash = {}
    for(let i=0;i<words.length;i++){
        words[i] = [...new Set(words[i])].sort().join("")
        if(hash[words[i]] == undefined){
            hash[words[i]]=1
        }
        else{
            hash[words[i]]+=1
        }
    }
    let result = 0
    for(let i=0;i<words.length;i++){
        for(let j=i+1;j<words.length;j++){
            if(words[i] == words[j]){
                ++result
            }
        }
    }
    return result
};