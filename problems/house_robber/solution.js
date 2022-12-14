/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let previous = 0, current = 0, temp; 
    for (let num of nums) {
        temp = current; 
        current = Math.max(num+previous, current);
        previous = temp;
    }
    return current;
};