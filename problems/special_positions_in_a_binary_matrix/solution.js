/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let count = 0
    const rowLength = mat[0].length, colLength = mat.length;

    const isValidRow = (index) => {
        let count = 0
        let row = mat[index]
        for (let i = 0; i < rowLength; i++) {
            if (row[i] === 1) {
                count++
            }
        }
        if (count > 1) {
            return false
        } else {
            return true
        }
    }
    
    const isValidCol = (index) => {
        let count = 0
        for (let i = 0; i < colLength; i++) {
            let row = mat[i]
            if (row[index] === 1) {
                count++
            }
        }
        if (count > 1) {
            return false
        } else {
            return true
        }
    }

    for (let i = 0; i < colLength; i++) {
        for (let j = 0; j < rowLength; j++) {
            if (mat[i][j] === 1) {
                if (isValidRow(i) && isValidCol(j)) {
                    count++
                }
            }
        }
    }
    
    
    
    return count
};