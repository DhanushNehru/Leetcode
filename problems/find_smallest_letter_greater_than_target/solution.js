/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let start = 0;
    let end = letters.length -1;
    while(start<=end){
        // Find the middle element
        let middle = parseInt(start + (( end - start ) / 2))
        if(target<letters[middle]){
            end = middle - 1;
        }
        else{
            start = middle + 1;
        }
    }
    // Condition to return the first character if the target doesn't exist
    return letters[start % (letters.length)]
};