/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let resultNum = -1, resultStr = "";
    for(let i=0;i<num.length-2;i++){
        if((num[i] == num[i+1]) && (num[i+1] == num[i+2])){
            // Check if the sum of the three consecutive elements is greater than the current result
            if(resultNum < num[i]+num[i+1]+num[i+2]){
                // Update the resultNum and resultStr with the new maximum sum and corresponding string
                resultNum = Math.max(resultNum, num[i]+num[i+1]+num[i+2])
                resultStr = num[i]+num[i+1]+num[i+2]
            }
        }
    }
    return resultStr
};