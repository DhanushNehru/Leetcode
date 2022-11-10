/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    const diff = high - low;
    console.log(diff)
    console.log(diff/2)
    console.log( (diff/2) +1)
    return diff==1? high/low : ( (low%2==1 || high%2==1) ? (parseInt((diff)/2))+1 : (diff)/2 );
};