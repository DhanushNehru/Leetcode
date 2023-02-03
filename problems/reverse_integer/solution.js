/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const resultNum = Number(Math.abs(x).toString().split("").reverse().join("")),
        mathPower = Math.pow(2,31), isNegativeNumber = x<0;

    if((isNegativeNumber && resultNum>mathPower) || (!isNegativeNumber && resultNum>mathPower-1)){
       return 0
    } 

    return isNegativeNumber ? -resultNum: resultNum;
};