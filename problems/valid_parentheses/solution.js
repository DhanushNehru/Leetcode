/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length <=1) return false
    const stack = [];
    const hash = {
        '(':')',
        '{':'}',
        '[':']'
    }
    for(let i=0;i<s.length; i++){
        if(hash[s[i]]){
            stack.push(hash[s[i]])
        }
        else if(s[i] != stack.pop()){
            return false;
        }
    }
    return !stack.length;
};