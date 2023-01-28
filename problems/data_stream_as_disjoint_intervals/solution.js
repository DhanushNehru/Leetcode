var SummaryRanges = function() {
    this.arr = []
};

/** 
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {
    this.arr[value] = true
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    const result = [];
    let start = -1;
    for(let i=0;i<this.arr.length;i++){
        if(start == -1){
            if(this.arr[i]){
                start = i;
                continue;
            }
        }
        else if(!this.arr[i]){
            result.push([start, i-1])
            start = -1
            continue;
        }
    }
    if(start != -1){
        result.push([start, this.arr.length - 1])
    }
    return result;
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */