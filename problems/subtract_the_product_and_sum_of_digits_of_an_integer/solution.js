/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let number=n;
    let product=1;
    let sum=0;
    while(number!=0){
        const digit = number%10;
        // Math.floor helps to convert the division value to digit
        number =  Math.floor(number/10);
        product = product * digit;
        sum=sum +digit; 
    }
    return product-sum;
};