/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let i=0, j=0; const stack=[]
    while(i<pushed.length){
        stack.push(pushed[i])
        while(stack[stack.length-1] == popped[j] && stack[stack.length-1] != undefined){
            stack.pop()
            ++j
        } 
        ++i;
    }
    //popped is a permutation of pushed
    return stack.length == 0
};