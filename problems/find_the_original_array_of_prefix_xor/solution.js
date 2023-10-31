/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    // The inverse of XOR is XOR itself
    const arr = [pref[0]]
    for(let i=1;i<pref.length;i++){
        arr[i] = pref[i-1] ^ pref[i] 
    }
    return arr
};