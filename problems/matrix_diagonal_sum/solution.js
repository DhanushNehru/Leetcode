/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let j = 0
    let length = mat.length;
    let i = length - 1;
    // flag check to confirm whether even or odd nxn matrix
    const flag = ((length %2) == 0) ? false: true;
    while(0<=i){
        sum += mat[j][i] + mat[j][j]
        ++j;
        --i;
    }
    if(flag == true){
        const midIndex = Math.floor(length / 2);
        // Subtracting the middle value if it is an odd nxn matrix
        // We are not using this condition inside loop because for every iteration this condition will be checked
        sum -= mat[midIndex][midIndex];
    }
    return sum;
    
};