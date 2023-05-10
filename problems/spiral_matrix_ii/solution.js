/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }

  let num = 1;
  let row = 0,
    col = 0,
    direction = 0;

  for (let i = 0; i < n * n; i++) {
    matrix[row][col] = num;
    num++;

    // Determine the next position based on the current direction
    switch (direction) {
      case 0: // Right
        col++;
        if (col === n || matrix[row][col] !== 0) {
          col--;
          row++;
          direction = 1; // Down
        }
        break;
      case 1: // Down
        row++;
        if (row === n || matrix[row][col] !== 0) {
          row--;
          col--;
          direction = 2; // Left
        }
        break;
      case 2: // Left
        col--;
        if (col === -1 || matrix[row][col] !== 0) {
          col++;
          row--;
          direction = 3; // Up
        }
        break;
      case 3: // Up
        row--;
        if (row === -1 || matrix[row][col] !== 0) {
          row++;
          col++;
          direction = 0; // Right
        }
        break;
    }
  }

  return matrix;
};