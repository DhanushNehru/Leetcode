/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = []
    for(let i=0;i<temperatures.length;i++){
        let futureDay = 0;
        for(let j=i+1;j<temperatures.length;j++){
            if(temperatures[i]<temperatures[j]){
                // the i'th day is calculated as j-i for warmer temperature
                futureDay= j-i;
                break;
            }
        }
        result.push(futureDay)
    }
    return result;
};