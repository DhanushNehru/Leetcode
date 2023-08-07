/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    // Initialize variables for row, stop, and col
    let row = 0;                 // Current row
    let stop = matrix.length - 1; // Last valid row index
    let col = matrix[0].length - 1; // Last column index

    // Search for the ROW where target might be present
    while(row < stop){
        if(target <= matrix[row][col]) break; // If target is less than or equal to the last element in current row, exit loop
        row++; // Move to the next row
    } 
    
    // Initialize variables for left and right pointers for binary search
    let left = 0;                   // Leftmost column index
    let right = matrix[0].length - 1; // Rightmost column index

    // Binary search within the identified row
    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // Calculate the middle column index

        if (matrix[row][mid] === target) { // If the middle element is the target, return true
            return true;
        } else if (matrix[row][mid] < target) { // If middle element is less than target, update left pointer
            left = mid + 1;
        } else { // If middle element is greater than target, update right pointer
            right = mid - 1;
        }
    }

    // Target not found in the identified row, return false
    return false;
};