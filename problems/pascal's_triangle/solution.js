/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pascal = []
    for(let i=0;i<numRows;i++){
        pascal[i] = []
        // The first element in each row is always 1
        pascal[i][0] = 1
        for(let j=1;j<i;j++){
            pascal[i][j] = pascal[i-1][j] + pascal[i-1][j-1]
        }
        // The last element in each row is always 1
        pascal[i][i] = 1
    }
    return pascal
};