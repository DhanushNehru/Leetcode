/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>a-b)
    const diff = arr[0]-arr[1]
    for(let i=1;i<arr.length-1;i++){
        if(diff !== arr[i]-arr[i+1]){
            return false
        }
    }
    return true;
};