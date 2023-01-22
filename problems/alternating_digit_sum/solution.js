/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    n = parseInt((n+"").split("").reverse().join(""))
    console.log(" nnn ", n)
    let sum = 0; isAdd = true;
    while(n!=0){
        let rem = n%10
        sum = isAdd ? sum+rem : sum-rem
        n = parseInt(n/10)
        isAdd = !isAdd
    }
    return sum;
};