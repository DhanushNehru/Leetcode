/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const isVowel = c => vowels.includes(c);
    const n = words.length;
    let prefixCount = Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        if (isVowel(words[i][0]) && isVowel(words[i][words[i].length - 1])) {
            prefixCount[i + 1] = prefixCount[i] + 1;
        } else {
            prefixCount[i + 1] = prefixCount[i];
        }
    }

    let result = [];
    for (let i = 0; i < queries.length; i++) {
        let [l, r] = queries[i];
        result.push(prefixCount[r + 1] - prefixCount[l]);
    }

    return result;
    
};