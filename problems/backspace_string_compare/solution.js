/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i = 0;
    const stackS = [],stackT = []
    while(i<s.length){
        if(s[i]=='#'){
            stackS.pop()
        }
        else{
            stackS.push(s[i])
        }
        ++i
    }
    i=0;
    while(i<t.length){
        if(t[i]=='#'){
            stackT.pop()
        }
        else{
            stackT.push(t[i])
        }
        ++i
    }
    return JSON.stringify(stackS) == JSON.stringify(stackT)
};