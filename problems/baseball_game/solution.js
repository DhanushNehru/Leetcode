/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const result = []
    for(let i=0;i<operations.length;i++){
        const resultLength = result.length
        if(operations[i] == 'C'){
            result.pop()
        }
        else if(operations[i] == 'D'){
            result.push(2*result[resultLength-1])
        }
        else if(operations[i] == '+'){
            // since all array values are string to evaluate we need to parse into integer
            result.push(parseInt(result[resultLength-1]) + parseInt(result[resultLength-2]) )
        }
        else{
            result.push(operations[i])
        }  
    }
    if(result.length == 0){
        return 0
    }
    return result.reduce((a,b)=> parseInt(a)+parseInt(b))
};