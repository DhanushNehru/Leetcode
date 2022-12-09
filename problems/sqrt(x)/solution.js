/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    let squareRoot = x;
    while (squareRoot*squareRoot > x)
        // Math.floor also can be got by | 0
        squareRoot = ((squareRoot + (x/squareRoot)) / 2) | 0;
    return squareRoot;
};