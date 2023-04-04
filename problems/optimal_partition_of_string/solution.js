/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    const set = new Set();
    let count = 1;
    for(let i=0;i<s.length;i++){
        if(set.has(s[i])){
            set.clear()
            ++count
            set.add(s[i], 1)
        }
        else{
            set.add(s[i], 1)
        }
    }
    return count;
};