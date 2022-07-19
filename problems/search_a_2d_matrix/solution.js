/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const matrixArray = matrix.flat();
    for(let i=0;i<matrixArray.length;i++){
        if(matrixArray[i]===target){
            return true;
        }
    }
    return false
};