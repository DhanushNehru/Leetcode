/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function(n) {
    
    let arr = [0,1,1];
    for(let i = 3; i <= n; i++) {
        arr[i] = arr[i - 3] + arr[i - 2] + arr[i -1];
    }
    return arr[n];
    
    // Below solution resulted in timeout error
    // if(n==0)
    //     return 0;
    // if(n==1 || n==2)
    //     return 1;
    // return tribonacci(n-3)+tribonacci(n-2)+tribonacci(n-1)
};