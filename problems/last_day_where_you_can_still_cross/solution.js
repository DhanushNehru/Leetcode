/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function(row, col, cells) {
    const grid = Array(row).fill(0).map(() => Array(col).fill(0))
    let left = 0, right = cells.length 
    let possiblePath = 0

    const existingPath = function(mid){
        // to avoid modifying the orginal grid so create deep copy
        const floodedGrid = grid.map((row) => [...row]);
        const stack = []
        for(let i = 0; i < mid; i++){
            const [r,c] = cells[i]
            floodedGrid[r-1][c-1] = 1
        }

        for(let c  = 0; c < col; c++){
            if (floodedGrid[0][c] === 0){
                stack.push([0, c])
                floodedGrid[0][c] = 1
            } 
        }
        while(stack.length){
            const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
            const [r, c] = stack.pop()

            if(r === row-1)return true

            for(const [dr, dc] of directions){
                const nr = r + dr
                const nc = c + dc

                if(nr >= 0 && nr < row && 
                    nc >= 0 && nc < col && 
                    floodedGrid[nr][nc] === 0
                    ){
                    stack.push([nr,nc])
                    floodedGrid[nr][nc] = 1
                }
            }
        }
        return false
    }


    while(left <= right){
        mid = Math.floor((left + right) / 2)
        if(existingPath(mid)){
            possiblePath = Math.max(possiblePath, mid)
            left = mid + 1
        }else {
            right = mid - 1
        }
    }

    return possiblePath

};