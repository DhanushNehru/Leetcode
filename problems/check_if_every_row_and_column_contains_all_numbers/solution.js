/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    // creating two hash to maintain row & value
    let hash1 = [];
    let hash2 = [];
    const length = matrix.length;
    for(let i=0;i<length;i++){
        for(let j=0;j<length;j++){
            // hash1 to check the row
            if(hash1[matrix[i][j]]){
                return false;
            }
            // hash2 to check the column
            if(hash2[matrix[j][i]]){
                return false;
            } 
            // Note: matrix[j][i] & matrix[i,j] are different 
            hash1[matrix[i][j]] = '1'
            hash2[matrix[j][i]] = '1'
        }
        hash1 = [];
        hash2 = [];
    }
    return true;
};