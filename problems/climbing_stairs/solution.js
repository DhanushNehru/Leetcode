/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    if(n<=0)
        return 0;
    if(n==1)
        return 1;
    if(n==2)
        return 2;
    // problem is similar to Fibonacci series
    // instead of [0,1,1] we have [0,1,2]
    const array = [0,1,2]
    for(let i=3;i<=n;i++){
        array[i] = array[i-1]+array[i-2]
    }
    return array[n]
};