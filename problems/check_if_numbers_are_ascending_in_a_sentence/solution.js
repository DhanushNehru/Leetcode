/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    s = s.split(" ")
    let initialNum = 0;
    for(let i=0;i<s.length;i++){
        const num = Number(s[i])
        if(Number.isInteger(num)){
            if(initialNum >= num){
                return false
            }
            initialNum = num
        }
    }
    return true;
};