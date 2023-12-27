/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    
    let totalTime = 0;
    for(let i=0;i<colors.length;i++){
        if(colors[i] == colors[i+1]){
            // If the time needed for the next color is greater, add the time for the current color
            if( neededTime[i+1] > neededTime[i] ){
                totalTime+= neededTime[i]
            }
            // If the time for the next color is not greater, add its time and swap the times
            else{
                totalTime += neededTime[i+1]

                // Swap the times of the current and next colors
                const temp  = neededTime[i+1];
                neededTime[i+1] = neededTime[i];
                neededTime[i] = temp;
            }
        }
    }

    return totalTime
};