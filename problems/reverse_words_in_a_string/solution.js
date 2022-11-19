/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let stringArray= s.replace(/\s+/g, ' ').trim().split(" ")
    let start = 0;
    let end = stringArray.length - 1;
    while(start<end){
        let temp = stringArray[start];
        stringArray[start] = stringArray[end]
        stringArray[end] = temp;
        ++start
        --end;
    }
    return stringArray.join(" ")

};