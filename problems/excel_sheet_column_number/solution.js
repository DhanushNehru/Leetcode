/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let div = 1;
    let result = 0;
    let columnTitleLength = columnTitle.length - 1;
    while(columnTitleLength>=0){
        result += (columnTitle.charCodeAt(columnTitleLength) - 64) * div;
        div *= 26;
        --columnTitleLength;
    }
    return result;
};