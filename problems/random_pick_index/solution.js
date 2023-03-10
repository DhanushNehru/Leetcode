/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.hash = {};
    nums.forEach((num, index) => {
        if(!this.hash[num]) {
            this.hash[num] = [];            
        }
        this.hash[num].push(index);
    });
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const index = this.hash[target].shift(); // we remove the element from beginnning of array
    this.hash[target].push(index); // then we add that element at the end of array
    return index; // finally we return the index element
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */