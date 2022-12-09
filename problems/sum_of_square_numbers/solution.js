/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function(c) {
    let start = 0;
    // Math.sqrt can be written as ** 0.5
    let end = Math.floor(c ** 0.5)
    // we need to only check the interval between 0 and square root of the number
    while(start<=end){
        const sum = (start**2) + (end**2)
        if(sum == c){
            return true
        }
        else if(sum>c){
            --end
        }
        else if(sum<c){
            ++start
        }
    }
    return false
};