/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operators = ['+','-','*','/']
    let result = []
    for(let i=0;i<tokens.length;i++){
        if(operators.includes(tokens[i])){
           // we follow stack implementation here
           // the order we pop the elements and evaluate it is to be considered
           const y = result.pop()
           const x = result.pop()
           // To handle conditons like this we need the replaceAll : 2--3
           // To avoid this error: SyntaxError: Invalid left-hand side expression in postfix operation
           const expression = `${(x)}${tokens[i]}${(y)}`.replaceAll("--","+")
           // if an operator exist we take the last 2 numbers and evaluate it using eval function
           // output is based on integer so we convert the evaluated to integer
           const answer =  parseInt(eval(expression)) 
           result.push(answer)
        }
        else{
            result.push(tokens[i])
        }
        console.log(" result ", result)
    }
    // we expect the end array to have a single element
    // parseInt on a single array value gives an integer output
    return parseInt(result)
};