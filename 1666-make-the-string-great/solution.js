/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [s[0]]
    let x = 32;

    for(let i=1;i<s.length;i++){

        // Check if the stack is empty or the current character matches the last character in the stack
        if(stack.length == 0 || s[i] == stack[stack.length-1]?.toUpperCase()){
            x=32 // ASCII difference to 32 (to convert lowercase to uppercase)
        }
        else{
            x=-32 // ASCII difference to -32 (to convert uppercase to lowercase)
        }

        // Check if the stack is empty or 
        // the ASCII difference between the current character and the last character in the stack
        if(s[i].charCodeAt(0)+x == stack[stack.length-1]?.charCodeAt(0)){
            stack.pop()
        }
        else{
            stack.push(s[i])
        }
    }

    return stack.join("")
};
