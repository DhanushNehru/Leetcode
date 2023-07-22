/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];

    let curBoard = Array.from({ length: n }, () => Array(n).fill(0.0));
    let nextBoard = Array.from({ length: n }, () => Array(n).fill(0.0));
    nextBoard[row][column] = 1.0;

    for (let i = 0; i < k; i++) {
        [curBoard, nextBoard] = [nextBoard, Array.from({ length: n }, () => Array(n).fill(0.0))];

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (curBoard[r][c] === 0.0) {
                    continue;
                }

                for (const [dr, dc] of moves) {
                    const nextRow = r + dr;
                    const nextCol = c + dc;

                    if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < n) {
                        nextBoard[nextRow][nextCol] += curBoard[r][c] / 8.0;
                    }
                }
            }
        }
    }

    let total = 0.0;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            total += nextBoard[r][c];
        }
    }

    return total;    
};