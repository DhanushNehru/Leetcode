/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    for(let i=1;i<=n;i++){
        // using arithmetic progression
        let leftSum = (i * (i+1)) / 2; // sum of elements from 1 to i
        let rightSum = ((n*(n+1)) / 2 ) - ((i * (i-1)) / 2); // sum of elements from i to n

        if(leftSum === rightSum){
            return i;
        }
    }
    return -1;
};
