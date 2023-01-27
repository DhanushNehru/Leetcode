/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    const dictionary = new Set(words)

    const isConcat = (word) => {
        if(dictionary.has(word)) return true;

        for(let i=0;i<word.length;i++){
            // first part of the concatenated string
            const prefix = word.slice(0,i+1)
            if(dictionary.has(prefix)){
                const suffix = word.slice(i+1)
                // the suffix can be further splitted
                const result = isConcat(suffix)
                if(result){
                    dictionary.add(word);
                    return true;
                }
            }
        }
    } 

    const results = [];
    for(const word of words){
        // initially we remove the word in the dictonary to check condition in line 9 & 14
        dictionary.delete(word);
        if(isConcat(word)) results.push(word)
        // post the operation we add back the word
        dictionary.add(word)
    }
    return results;
};