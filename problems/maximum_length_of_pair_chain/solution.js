/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a,b)=>a[1]-b[1])
    let cur = Number.MIN_SAFE_INTEGER, result = 0;
    for(pair of pairs){
        if(cur<pair[0]){
            result++;
            cur = pair[1]
        }
    }
    return result
};