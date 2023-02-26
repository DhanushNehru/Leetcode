/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const row = new Set(), col = new Set()
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]==0){
                row.add(i)
                col.add(j)
            }
        }
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(row.has(i) || col.has(j)){
                matrix[i][j] = 0
            }
        }
    }
    return matrix;
};