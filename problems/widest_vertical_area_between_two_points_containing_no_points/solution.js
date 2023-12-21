/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    // Sort the points based on their x-coordinates in ascending order
    points.sort((a,b) => a[0] - b[0])

    let maxWidth = 0;

    for (let i = 1; i < points.length; i++) {
        // Calculate the width between the current point and the previous point
        // (the difference of x-coordinates)
        const width = points[i][0] - points[i - 1][0];
        // Update the maximum width if the calculated width is greater
        maxWidth = Math.max(maxWidth, width);
    }

    return maxWidth;
};