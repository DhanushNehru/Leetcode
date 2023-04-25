var SmallestInfiniteSet = function() { 
    // its constrain is given as,  1 <= num <= 1000
    this.arr = new Array(1001).fill(true);
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    for (let i = 1; i < this.arr.length; i++) {
      if (this.arr[i]) {
        this.arr[i] = false;
        return i;
      }
    }
    return null;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    this.arr[num] = true;
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */