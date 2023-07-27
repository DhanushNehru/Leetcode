/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
        batteries.sort((a, b) => a - b);
        let left = 1, right = Math.floor(batteries.reduce((a, b) => a + b) / n);
        while (left < right) {
            let target = right - Math.floor((right - left) / 2);
            let total = batteries.reduce((a, b) => a + Math.min(b, target), 0);
            if (total >= target * n) {
                left = target;
            } else {
                right = target - 1;
            }
        }
        return left;    
};