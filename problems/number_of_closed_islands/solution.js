/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {

    const island = (i, j) => {
        //check if island is near the border 
        if (!grid[i] || (!grid[i][j] && (grid[i][j]) !== 0)){
            return 0;
        }
        let cur = grid[i][j];
        //show that we have checked this cell
        if (cur === 0) grid[i][j] = 'C';
        //this cell suits us
        if (cur === 1 || cur === 'C') {
            return 1;
        }
        return island(i - 1, j) * //top
            island(i, j + 1) * //right
            island(i + 1, j) * //bottom
            island(i, j - 1);  //left
    }


    let count = 0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === 1 || grid[i][j] === 'C'){
                continue;
            }
            if(island(i,j)){
                count++
            }
        }
    }
    return count;
};

