/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function(a, b) {
    if (a === 0) return "b".repeat(b);
    if (b === 0) return "a".repeat(a);
    if (a === b) {
        return "ab" + strWithout3a3b(a - 1, b - 1);
    }
    else if (a > b) {
        return "aab" + strWithout3a3b(a - 2, b - 1);
    }
    else if(a < b){
        return "bba" + strWithout3a3b(a - 1, b - 2);
    }
};