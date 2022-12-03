/**
 * @param {number[][]} mat
 * @return {number[]}
 */

const findPeakElement = function(arr){
    return arr.indexOf(Math.max(...arr));
}

var findPeakGrid = function(mat) {
    // for binary search usually we define start & end
    let start = 0;
    let end = mat.length - 1;
    while(start<end){
        let midRowIndex = Math.floor(start+((end-start)/2))
        // we find the peak element for each row, which gives the column index
        let ColumnIndex = findPeakElement(mat[midRowIndex])

        // we follow the binary search approach for comparison of elements
        if(mat[midRowIndex][ColumnIndex] < mat[midRowIndex + 1][ColumnIndex]){
            start = ++midRowIndex 
        }
        else{
            end = midRowIndex
        }
    }
    // now the start will be pointing to the max element (row)
    // we get the column number by finding the greatest array value in the row
    return [start,findPeakElement(mat[start])]
};