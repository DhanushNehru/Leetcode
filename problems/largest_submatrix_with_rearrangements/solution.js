/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    // Get the number of rows and columns in the matrix
    const m = matrix.length;
    const n = matrix[0].length;

    // Iterate over each row starting from the second row
    for (let i = 1; i < m; ++i) {
        // Iterate over each column
        for (let j = 0; j < n; ++j) {
            // If the current element is 1, update it by adding the value of the corresponding element in the previous row
            if (matrix[i][j] === 1) {
                matrix[i][j] += matrix[i - 1][j];
            }
        }
    }
    
    // Initialize the variable to store the maximum submatrix area
    let ans = 0;
    
    // Iterate over each row in the matrix
    matrix.forEach(row => {
        // Sort the elements in the row in descending order
        row.sort((a, b) => b - a);
        
        // Iterate over the sorted elements in the row
        for (let j = 0, k = 1; j < n && row[j] > 0; ++j, ++k) {
            // Calculate the area of the submatrix formed by considering the current element and update the maximum area
            const s = row[j] * k;
            ans = Math.max(ans, s);
        }
    });
    
    // Return the maximum submatrix area
    return ans;    
};
