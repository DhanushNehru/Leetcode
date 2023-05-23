/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k,
    this.nums = nums 
};

/** 
 * @param {number} val
 * @return {number}
 */

KthLargest.prototype.add = function(val) {
    this.nums.push(val)
    return this.nums.sort((a,b)=>b-a)[this.k-1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */