/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {

    const rowLength = grid.length, colLength = grid[0].length;

    let rowOneArr = [], colOneArr = [], noOfOneInRow = 0, noOfOneInCol = 0,
    rowZeroArr = [], colZeroArr = [], noOfZeroInRow = 0, noOfZeroInCol = 0;

    for(let i=0;i<rowLength;i++){
        for(let j=0;j<colLength;j++){
            if(grid[i][j]==1){
                ++noOfOneInRow
            }
            else{
                ++noOfZeroInRow
            }
        }
        rowOneArr.push(noOfOneInRow)
        rowZeroArr.push(noOfZeroInRow)
        
        noOfOneInRow = 0;
        noOfZeroInRow = 0; 
    }

    for(let i=0;i<colLength;i++){
        for(let j=0;j<rowLength;j++){
            if(grid[j][i]==1){
                ++noOfOneInCol
            }
            else{
                ++noOfZeroInCol
            }
        }
        colOneArr.push(noOfOneInCol)
        colZeroArr.push(noOfZeroInCol)
        noOfOneInCol = 0;
        noOfZeroInCol = 0;
    }

    const result = []; let rowArr = []
    for(let i=0;i<rowLength;i++){
        for(let j=0;j<colLength;j++){
            rowArr.push(rowOneArr[i] + colOneArr[j] - rowZeroArr[i] - colZeroArr[j] ) 
        }
        result.push(rowArr)
        rowArr = []
    }

    return result;
};