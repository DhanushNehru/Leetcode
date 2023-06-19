/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let sum = 0, max=0;
    for(let i=0;i<gain.length;i++){
        sum+=gain[i]
        if(sum>max){
            max = sum
        }
    }
    return max
};