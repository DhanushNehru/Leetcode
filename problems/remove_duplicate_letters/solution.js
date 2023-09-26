/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const stack = []
    for(let i=0;i<s.length;i++){
        const char = s[i]

        // if s[i] already appears in stack, jump to next loop
        if(stack.indexOf(char) > -1) continue;

        while(
            // when stack is not empty
            stack.length>0 &&
            // Check if the character at the top of the stack has a greater dictionary order (lexicographically smaller) than the current character 'char'
            stack[stack.length - 1] > char &&
            // The character at the top of the stack still appears in the unprocessed part of the string 's'
            s.indexOf(stack[stack.length - 1], i) > i
        ){
            // remove top of stack
            stack.pop();
        }
        // put s[i] into top of stack
        stack.push(char);
    }
    return stack.join("");
};