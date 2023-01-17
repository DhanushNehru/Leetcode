/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let noOfConsistentStrings = 0, isConsistentString;
    // we sort the characters so we can compare it using the includes method
    allowed = [...new Set(allowed.split('').sort())].join("");
    for(let i=0;i<words.length;i++){
        words[i] = [...new Set(words[i].split('').sort())].join("")
        for(let j=0;j<words[i].length;j++){
            if(allowed.includes(words[i][j])){
                isConsistentString = true;
            }
            else{
                isConsistentString = false;
                break;
            }
        }
        if(isConsistentString){
            ++noOfConsistentStrings;
        }
    }
    return noOfConsistentStrings;
};