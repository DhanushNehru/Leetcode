/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let result = num;
    let noOfSteps = 0;
    while(result > 0){
        ++noOfSteps;
        result = (result%2 ==0)?  result/2 : result -1;
    }
    return noOfSteps;
};