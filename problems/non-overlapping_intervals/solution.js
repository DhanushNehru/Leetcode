/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // First we sort the intervals based on the ending points
    // [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 1, 3 ] ] becomes
    // [ [ 1, 2 ], [ 2, 3 ], [ 1, 3 ], [ 3, 4 ] ]
    intervals.sort((a,b)=>a[1]-b[1])
    
    let noOfIntervalsNotOverlapping = 0;
    let prev = null;
    for(let interval of intervals){
        if(prev == null){
            prev = interval
        }
        else{
            // the condition to check if it is not overlapping
            if(prev[1] > interval[0]){
                ++noOfIntervalsNotOverlapping
            }
            else{
                prev = interval
            }
        }
    }
    return noOfIntervalsNotOverlapping;
};