/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    let min = Math.floor(maxSum/n)
    let max = maxSum
    const findSum = (num, len) => {
        if (len < num) {
            return len * (num + num - len + 1) / 2
        } 
        return num * (num + 1) / 2 + (len - num)
    }
    const isWithin = num => {
        const leftSum = findSum(num, index + 1)
        const rightSum = findSum(num, n - index)
        return maxSum >= leftSum + rightSum - num
    }
    while (min <= max) {
        const mid = (min + max) >> 1
        isWithin(mid) ? min = mid + 1 : max = mid - 1
    }
    return max
};