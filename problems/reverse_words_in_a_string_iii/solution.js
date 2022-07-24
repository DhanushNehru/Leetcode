/**
 * @param {string} s
 * @return {string}
 */
function reverseString (str) {
    if(str==="")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}

var reverseWords = function(s) {
    return s.split(" ").map((str)=> reverseString(str)).join(" ");
};