/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const VOWEL = new Set(['a', 'e', 'i', 'o', 'u']);
    let max = 0;
    for (let i = 0; i < k; ++i) {
        if(VOWEL.has(s[i])){
            ++max;
        }
    }
    for (let i = 0, cur = max; i < s.length - k; ++i) {
        if(VOWEL.has(s[i])){
            --cur;
        }
        if(VOWEL.has(s[i + k])){
            ++cur;
        } 
        if(cur > max){
            max = cur
        }
    }
    return max;
};