/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = 'AEIOUaeiou'

    // Collect vowels and sort them in descending order
    const vowelsSorted = []
    for(const char of s){
        if(vowels.includes(char)){
            vowelsSorted.push(char)
        }
    }
    vowelsSorted.sort().reverse();

    // Construct the answer string by replacing vowels in sorted order
    let result = '';
    for (const char of s) {
        if (vowels.includes(char)) {
            result += vowelsSorted.pop();
        } else {
            result += char;
        }
    }

    return result;
};