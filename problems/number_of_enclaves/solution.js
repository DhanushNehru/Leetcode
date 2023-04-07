/**
 * @param {number[][]} grid
 * @return {number}
 */

// refer this problem
// https://leetcode.com/problems/number-of-closed-islands/

var numEnclaves = function(grid) {
    const check = (i, j) => {
        if (!grid[i] || (!grid[i][j] && (grid[i][j]) !== 0)){
            return Math.Infinity;
        }
        if (grid[i][j] === 0 || grid[i][j] === 'C') {
            return 0;
        }
        // 'C' means check
        grid[i][j] = 'C';
        return check(i - 1, j) + //top
            check(i, j + 1) + //right
            check(i + 1, j) + //bottom
            check(i, j - 1) + 1;  //left
    }


    let result = 0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] !== 1){
                continue;
            }
            const currResult = check(i,j)
            if(!isNaN(currResult)){
                result += currResult
            }
        }
    }
    return result;
};