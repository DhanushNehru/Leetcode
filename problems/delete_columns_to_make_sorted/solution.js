/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let noOfColumnsCount = 0, isNoOfColumnsCount, i = 0, j = 0;
    while(i<strs[0].length){
        let temp = 0;
        while(j<strs.length){
            const charCode = strs[j][i].charCodeAt(0)
            // we are comparing the charCode with each index character in array
            if(charCode >= temp ){
                temp = charCode
                isNoOfColumnsCount=true;
            }
            else{
                // if charCode is not in an incremental order that column has to be deleted
                isNoOfColumnsCount = false
                break;
            }
            ++j;
        }
        j=0;

        if(isNoOfColumnsCount == false){
            ++noOfColumnsCount;
        }
        ++i;
    }
    return noOfColumnsCount
};