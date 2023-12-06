/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    const weekCount = Math.floor(n / 7);
    const remainingDays =  n % 7;
    
    //Calculate the total amt for complete weeks
    let total = ((weekCount * (weekCount - 1)) / 2) * 7; 
    // Add the contribution for each week (arithmetic progression with a common difference of 7)
    total += weekCount * 28; // 1+2+3+4+5+6+7 = 28
    // Calculate the total amt for remaining days (arithmetic progression with a common difference of 1)
    total += ((remainingDays * (remainingDays + 1)) / 2) + (weekCount * remainingDays);
    
    return total;
};