/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    // Initialize an empty queue to store coordinates and distances
    let queue = [];
    // Define possible directions: up, left, down, right
    let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    
    // Iterate through each cell in the matrix
    for(let row = 0; row < mat.length; row++) {
        for(let col = 0; col < mat[0].length; col++) {
            // If the cell contains a '1', update its value to Infinity
            if(mat[row][col] === 1) {
                mat[row][col] = Infinity;
            } else {
                // If the cell contains a '0', push its coordinates and distance 0 to the queue
                queue.push([row, col, 0]);
            }
        }
    }
    
    // While there are elements in the queue
    while(queue.length) {
        // Dequeue the first element from the queue, representing current position and distance
        let [row, col, dist] = queue.shift();
        
        // If the current distance is less than the value in the matrix at the current position
        if(mat[row][col] > dist) mat[row][col] = dist;
        
        // Iterate through each possible direction
        for(let [dx, dy] of directions) {
            // Calculate the new coordinates
            let newX = dx + row;
            let newY = dy + col;
            
            // Check if the new coordinates are within the bounds of the matrix
            if(newX >= 0 && newX < mat.length && newY >= 0 && newY < mat[0].length) {
                // If the value at the new coordinates is Infinity, push the new coordinates and incremented distance to the queue
                if(mat[newX][newY] === Infinity) {
                    queue.push([newX, newY, dist + 1]);
                }
            }
        }
    }
    // Return the updated matrix with distances from nearest '0' cells
    return mat;
};