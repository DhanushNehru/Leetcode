/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let resultNum;
    const mathPower = Math.pow(2,31)
    const isNegativeNumber = x<0;
    
    resultNum = Math.abs(x)
    console.log(" Result Num Initial ", resultNum)

    resultNum = resultNum.toString().split("").reverse().join("")
    resultNum = Number(resultNum)
    
    console.log(" Result Num Final ", resultNum)
    
    if((isNegativeNumber && resultNum>mathPower) || (!isNegativeNumber && resultNum>mathPower-1)){
       return 0
    } 
       
    return isNegativeNumber ? -resultNum: resultNum;
  
};