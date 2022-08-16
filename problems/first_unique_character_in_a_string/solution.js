/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let index = -1;
    for(let i=0;i<s.length;i++){
        const charRemovedStr = s.slice(0,i) + s.slice(i+1);
        if(!charRemovedStr.includes(s.charAt(i))){
            index = i;
            break;
        }
    }
    return index
};