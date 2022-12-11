/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let sum = 0
    for(let i=0;i<grid.length;i++){
        grid[i] = grid[i].sort((a,b)=> a-b)
    }
    for(let i=0;i<grid[0].length;i++){
        let max = 0
        for(let j=0;j<grid.length;j++){
            max = max < grid[j][i] ? grid[j][i] : max;
        }
        sum += max;
    }
    return sum;
};