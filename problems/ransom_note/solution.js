/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let result = true;
    for(let i=0;i<ransomNote.length;i++){
        if(magazine.includes(ransomNote.charAt(i))){
            // strings are immutable (cannot be changed) - instead of using 'temp' I reused magazine
            magazine = magazine.replace(ransomNote.charAt(i),'')
        }
        else{
            result=false;
        }
    }
    return result;
};