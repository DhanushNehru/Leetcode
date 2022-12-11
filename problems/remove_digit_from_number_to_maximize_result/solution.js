/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let max = 0
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            let temp = number.slice(0, i) + number.slice(i + 1)
            //value of the resulting string in decimal form should be maximized
            //so we are checking the following condition
            if (temp > max) max = temp
        }
    }
    return max
};