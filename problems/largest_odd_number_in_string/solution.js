/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    // The logic here is to iterate from the end
    for(let i = num.length -1; i >= 0 ; i-- ){
        // If the digit from the end if it is odd
        if(num[i]%2 == 1){
            // If odd, return the substring from the beginning to the current index
            return num.substring(0, i+1)
        }
    }
    return ""
};