/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    let length = grid.length;

    for(let i=0;i<length;i++){
        for(let j=0;j<length;j++){
             // condition to check the diagonals
            if( (i===j) || (i+j == (length-1)) ){
                if((grid[i][j] == 0)){
                    return false
                }
            }
            // condition to check other positions other than diagonals
            else{
                if(grid[i][j] != 0){
                    return false
                }
            }
        }
    }
    return true;
};