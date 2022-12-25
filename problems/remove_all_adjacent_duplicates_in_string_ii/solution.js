/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var removeDuplicates = function(s, k) {
    const stack = [];
    
    for(let char of s) {
        if(stack.length && stack[stack.length-1][0] === char) {
            stack[stack.length-1][1] += 1;
            if(stack[stack.length-1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([char, 1]);
        }
    }

    let res = '';
    
    // we are recreating the string after the adjacent removal based on count of each char
    for(let [char, count] of stack) {
        res += char.repeat(count);
    }
    
    return res;
};


// Please check submissions, below code didn't work when k=20 for a particular test case

// var removeDuplicates = function(s, k) {
//     const stack = [], similarCharStack = {}; 
//     let i=0;   
//     while(i<s.length){
//         console.log(" similarCharStack ", similarCharStack )
//         console.log(" Stack ", stack )
//         if(stack[stack.length-1] == s[i] ){
//             if(similarCharStack[s[i]]===undefined){
//                 // initially when 2 characters are same count starts from 0
//                 similarCharStack[s[i]] = 2
//             }
//             else{
//                 ++similarCharStack[s[i]]
//             }
//             console.log(" SIMMM ", similarCharStack[s[i]] )
//             if(k==similarCharStack[s[i]]){
//                 for(let index=0;index<similarCharStack[s[i]]-1;index++){
//                     stack.pop()
//                 }
//                 similarCharStack[s[i]] = undefined
//             }
//             else{
//                 stack.push(s[i])
//             }
//         }
//         else{
//             similarCharStack[s[i]] = undefined;
//             stack.push(s[i])
//         }
//         i++
//     }
//     return stack.join("");
// };

