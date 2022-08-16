/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start = 1;
    let end = n;
    while(end >= start){
        const middle = parseInt(start + ( (end-start) / 2 ) );
        const result = guess(middle)
        if(result == 0){
            return middle
        }
        else if(result < 0){
            end = middle - 1
        }
        else if(result > 0){
            start = middle + 1
        }
    }
    return -1;
};