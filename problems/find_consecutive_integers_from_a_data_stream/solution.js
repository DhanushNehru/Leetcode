/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function(value, k) {
    // we initialize count 0 in constructor to track
    this.count = 0;
    this.value = value;
    this.k = k;
};

/** 
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function(num) {
    // if the num is not in the value part of data stream we initialize to 0
    if(num != this.value){
        this.count = 0;
    }
    else{
        this.count += 1;
    }
    // if the consec is within the k limit we return true
    if(this.count >= this.k){
        return true
    }
    else{
        return false
    }
};

/** 
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */