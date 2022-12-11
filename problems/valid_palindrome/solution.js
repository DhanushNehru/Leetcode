/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    // using regex we remove other characters except alphabets & numbers
    s = s.match(/[A-Za-z0-9]/g)
    if(s==null){
        return true
    }   
    // reverse modifies the original array
    // so first we check the lowercase of original string and then reverse it
    return s.join("").toLowerCase() === s.reverse().join("").toLowerCase() 
};