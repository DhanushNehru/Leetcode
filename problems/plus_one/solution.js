/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let digitsLength = digits.length - 1;
    let plusOne = 1;
    do{
        if(digitsLength<0){
            digits.unshift(plusOne)
        }
        digits[digitsLength] += plusOne
        plusOne = parseInt(digits[digitsLength] / 10)
        digits[digitsLength] = digits[digitsLength] % 10
        --digitsLength;
    }while(plusOne>0)
    return digits;
}