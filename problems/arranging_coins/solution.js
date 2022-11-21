/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let i = 0
    let result = 0;
    while( result<=n ){
        ++i;
        result = (i*(i+1))/2
    }
    return --i ;
};