/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    const initialWordArray = word.split(""), count = 1;
    let j=0;
    while(j<initialWordArray.length){
        let hash = {}
        // The original array shouldn't change so we use spread operator and do a deep clone
        let wordArray = [...initialWordArray]
        // We remove one alphabet for every loop iteration
        wordArray.splice(j,1)
        // we set the count for each character occurance
        for(let i=0;i<wordArray.length;i++){
            if(hash[wordArray[i]]){
                hash[wordArray[i]]+=count;
            }
            else{
                hash[wordArray[i]]=count;
            }
        }
        // if the frequency count of char is unique and of length 1 then we return true
        if([...new Set(Object.values(hash))].length == 1){
            return true;
        }
        ++j;
    }
    // If removal of char doesn't satisfy the conditon the we return false
    return false;
};