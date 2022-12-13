/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let hash = {}
    let numRowsCount = 0;
    let isIncrement;
    // we create a hash object & for each key we push values inside the array
    // Eg) {
    //.   '0' : [P, A, H ,N]
    //    '1' : [A, P, L, S, I, I, G]
    //    '2' : [Y, I, R]
    // }
    for(let i=0;i<s.length;i++){
        if(Array.isArray(hash[numRowsCount])){
            hash[numRowsCount].push(s[i])
        }
        else{
            hash[numRowsCount] = [s[i]]
        }
        // the isIncrement flag denotes whether we are going down or top in the zigzag pattern
        if(numRowsCount==numRows-1){
            isIncrement = false;
        }
        if(numRowsCount == 0){
            isIncrement = true;
        }
        // the numRowsCount maintain the zigzag order
        if(isIncrement){
            ++numRowsCount
        }
        else{
            --numRowsCount
        }
    }
    return Object.values(hash).flat().join("")
};