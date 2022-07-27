/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x >= 0 && x == x.toString().split("").reverse().join("")){
         return true
    }
    return false
};