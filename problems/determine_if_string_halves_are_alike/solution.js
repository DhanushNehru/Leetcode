/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const stringLength = s.length;
    const mid = Math.floor(stringLength/2)
    let string1 = s.slice(0, mid).replace(/[aeiouAEIOU]/g,"")
    let string2 = s.slice(mid, stringLength).replace(/[aeiouAEIOU]/g,"")
    return string1.length == string2.length;
};