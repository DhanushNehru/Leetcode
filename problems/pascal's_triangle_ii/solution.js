/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// Similar to this problem https://leetcode.com/problems/pascals-triangle/
var getRow = function(rowIndex) {
    const pascal = []
    for(let i=0;i<=rowIndex;i++){
        pascal[i] = []
        // The first element in each row is always 1
        pascal[i][0] = 1
        for(let j=1;j<i;j++){
            // Calculate the middle elements using values from the previous row
            pascal[i][j] = pascal[i-1][j] + pascal[i-1][j-1]
        }
        // The last element in each row is always 1
        pascal[i][i] = 1
    }
    return pascal[rowIndex]  
};