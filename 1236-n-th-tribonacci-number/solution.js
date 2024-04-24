/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function(n) {
    const arr = [0,1,1];
    for(let i = 3; i <= n; i++) {
        arr[i] = arr[i - 3] + arr[i - 2] + arr[i -1];
    }
    return arr[n];
};
