/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // Instead of this: let originalHeights = [...heights]
    // We can use slice
    const expected = heights.slice().sort((a, b) => a - b);
    let counter = 0;
    for(let i in heights){
        if(heights[i] !== expected[i]){
            counter++;
        }
    }
    return counter;
};