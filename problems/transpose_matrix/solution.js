/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    // array to store the transposed matrix
    const result = [] 
    // 'arr' to store each row of the transposed matrix
    let arr = []

    for(let i=0;i<matrix[0].length;i++){
        for(let j=0;j<matrix.length;j++){
            arr.push(matrix[j][i])
        }
        result.push(arr)
        arr = []
    }
    
    return result;
};