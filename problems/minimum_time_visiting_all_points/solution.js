/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let result = 0;    
    for(let i=0; i<points.length-1; i++){
        // Retrieve the current point (point1) and the next point (point2)
        let point1 = points[i], point2 = points[i+1]
        // Calculate the time (seconds) required to move from point1 to point2
        // The time is the maximum of the absolute differences in x and y coordinates
        const seconds = Math.max( Math.abs(point1[0]-point2[0]), Math.abs(point1[1]-point2[1]))
        result+= seconds

    }
    return result;
};