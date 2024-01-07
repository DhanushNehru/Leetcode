/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonal = 0;
    let maxArea = 0;

    for (let i = 0; i < dimensions.length; i++) {
        const length = dimensions[i][0];
        const width = dimensions[i][1];
        
        const diagonal = Math.sqrt(length**2 + width**2);

        if (diagonal > maxDiagonal || (diagonal === maxDiagonal && (length * width) > maxArea)) {
            maxDiagonal = diagonal;
            maxArea = length * width;
        }
    }

    return maxArea;
};