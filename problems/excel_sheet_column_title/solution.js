/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = ""
    while(columnNumber>0){
        const digit = columnNumber%26 === 0 ? 26: columnNumber%26
        result = String.fromCharCode(64+ digit) + result
        columnNumber = Math.floor((columnNumber-digit)/26)
    }
    return result;
};