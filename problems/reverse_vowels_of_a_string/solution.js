/**
 * @param {string} s
 * @return {string}
 */
String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
}


var reverseVowels = function(s) {
    let start = 0;
    let end = s.length-1
    let temp1 = '', temp2 = '';
    const vowels = "aeiouAEIOU"
    while (start< end ) {
        temp1 = s.charAt(start)
        temp2 = s.charAt(end)
        if ( !vowels.includes(temp1) ) {
          start++;
        }
        if ( !vowels.includes(temp2) ) {
          end--;
        }
        if( vowels.includes(temp1) && vowels.includes(temp2)){
            s= s.replaceAt(start, temp2)
            s= s.replaceAt(end, temp1)
            start++;
            end--;
        }
    }
    return s;
};