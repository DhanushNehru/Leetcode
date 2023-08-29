/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let score = 0, maxScore = 0, earliestHour = -1;
    for(let i=0;i<customers.length;i++){
        score += (customers[i] === 'Y') ? 1 : -1;
        if(score > maxScore){
            maxScore = score;
            earliestHour = i
        }
    }
    return ++earliestHour;
};