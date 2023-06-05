/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    // First pair of point (x0, y0)
    const x0 = coordinates[0][0];
    const y0 = coordinates[0][1];
 
    // Second pair of point (x1, y1)
    const x1 = coordinates[1][0];
    const y1 = coordinates[1][1];
 
    const dx = x1 - x0;
    const dy = y1 - y0;
     
    // Loop to iterate over the points
    for (var i = 0; i < coordinates.length; i++) {
        var x = coordinates[i][0], y = coordinates[i][1];
        // math - if strainght line then it will be equal
        if (dx * (y - y1) != dy * (x - x1)){
            return false;
        }
    }
    return true;
};