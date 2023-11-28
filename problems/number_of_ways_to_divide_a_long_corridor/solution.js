/**
 * @param {string} corridor
 * @return {number}
 */
// Dynamic programming
var numberOfWays = function(corridor) {
    // a the number of 0 seat
    // b the number of 1 seat
    // c the number of 2 seats
    let a = 1, b = 0, c = 0, mod = 1e9 + 7;

    for (let i = 0; i < corridor.length; ++i) {
        a = (a + c) % mod;
        
        if (corridor.charAt(i) === 'S') {    
            c = b;
            b = a;
            a = 0;
        }
    }

    return c;
};