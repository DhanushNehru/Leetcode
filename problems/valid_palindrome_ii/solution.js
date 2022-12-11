/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function(s, start, end) {
    while(start<end){
        if(s[start]!=s[end]){
            return false;
        }
        ++start
        --end
    }
    return true 
};

const validPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        if (s[start] != s[end]) {
            // since one character is deleted we check these two cases
            return isValid(s, start + 1, end) || isValid(s, start, end - 1);
        }
        start++;
        end--;
    }
    
    return true;
};