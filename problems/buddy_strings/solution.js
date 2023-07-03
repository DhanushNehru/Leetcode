/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length != goal.length) return false;
    const diff = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] != goal[i]) diff.push(i);
        if(diff.length > 2) return false;
    }
    // If there are repetitive characters in the string & all the chars are same in s & goal then we should return true
    if(!diff.length) return s.length != [...new Set(s)].length;
    const [i, j] = diff; 
    return s[i] == goal[j] && goal[i] == s[j];
};