/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const row = matrix.length, col = matrix[0].length

    // Iterate through the rows starting from the second row
    for(let i=1; i<row; i++){
        // Iterate through the columns
        for(let j=0; j<col; j++){
            // If the current column is the first column
            if(j == 0 ){
                // Update the current element by adding the minimum value from the previous row's adjacent columns
                matrix[i][j] += Math.min(matrix[i-1][j], matrix[i-1][j+1]) 
            }
            // If the current column is the last column
            else if(j == col - 1){
                // Update the current element by adding the minimum value from the previous row's adjacent columns
                matrix[i][j] += Math.min(matrix[i-1][j], matrix[i-1][j-1])
            }
            // If the current column is neither the first nor the last
            else{
                // Update the current element by adding the minimum value from the previous row's adjacent columns
                matrix[i][j] += Math.min(matrix[i-1][j], matrix[i-1][j-1], matrix[i-1][j+1])
            }      
        }
    }

    let min = Number.MAX_SAFE_INTEGER

    // Iterate through the elements in the last row
    for(let i=0;i<row;i++){
        if(matrix[row-1][i] < min){
            min = matrix[row-1][i]
        }
    }

    return min
};
