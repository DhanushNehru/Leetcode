/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    // sorting points in ascending order
    points.sort((a,b) => a[0]-b[0])
    let prev = null, nofArrowsCount = 0;

    for(let i=0;i<points.length;i++){
        // x_start is points[i][0]
        // x_end is points[i][1]
        if(prev == null || prev < points[i][0]){
            ++nofArrowsCount;
            prev = points[i][1]
        }
        else{
            prev = Math.min(prev, points[i][1])
        }
    }
    return nofArrowsCount;
};