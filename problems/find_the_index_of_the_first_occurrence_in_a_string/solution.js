/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle===""){
        return 0;
    }
    else{
        return haystack.indexOf(needle)
    }
};