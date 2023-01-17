/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let current = 0;
    for(let i=0;i<s.length;i++){
       // first flip all 0 into 1;
       if(s[i] === '0'){
           current++;
       }
    }
    let result = current;
    for(let i=0;i<s.length;i++){
       if(s[i] === '0'){
           current--;
       }
       else{
           current++;
       }
       // change into 000111 case
       // to check monotone increasing
       result = Math.min(result, current);
    }
    return result;
};