/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = []
    let i = 0;
    for(let interval of intervals){
        let [start, end] = interval
        if(newInterval[1]< start){
            result.push(newInterval)
            // intervals = [1, 2, 3, 4, 5]
            // var newArray = intervals.slice(2);
            // console.log(newArray); // [3, 4, 5]
            return [...result, ...intervals.slice(i)] 
        }
        else if(newInterval[0] > end){
            result.push(interval)
        }
        else{
            newInterval[0]=Math.min(newInterval[0],start)
            newInterval[1]=Math.max(newInterval[1],end)
        }
        ++i
    }
    result.push(newInterval)
    return result
};