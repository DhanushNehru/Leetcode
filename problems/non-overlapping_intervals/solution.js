/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // First we sort the intervals based on the ending points
    // [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 1, 3 ] ] becomes
    // [ [ 1, 2 ], [ 2, 3 ], [ 1, 3 ], [ 3, 4 ] ]
    intervals.sort((a,b)=> a[1] - b[1]);
    let ans = 0, k = null;
    for(let interval of intervals){
      let x = interval[0];
      let y = interval[1];
      if(k == null || x >= k){
        k = y;
      }else{
        ans++;
      }
    }
    return ans;
};