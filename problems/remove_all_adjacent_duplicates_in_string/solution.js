/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let i=0;
    let stack = []   
    while(i<s.length){
        if(stack[stack.length-1] == s[i]){
            stack.pop()
        }
        else{
            stack.push(s[i])
        }
        i++
    }
    return stack.join("");
};