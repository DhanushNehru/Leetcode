/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = -1;
    let result = []
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            max = max < arr[j] ? arr[j]: max
        }
        result.push(max)
        max=-1;
    }
    return result;
};