/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // if the first character is '0', indicating an invalid encoding
    if(s[0] == '0'){
        return 0
    }

    const table = Array(s.length + 1).fill(0);
    //base case
    table[0] = 1; table[1] = 1;

    for(let i=2;i<=s.length;i++){
        // Extract the current one-digit and two-digit numbers
        const oneDigit = Number(s.slice(i-1, i))
        const twoDigit = Number(s.slice(i-2, i))

        // If the one-digit number is between 1(a) and 9(i) (inclusive), update the table
        if (oneDigit >= 1 && oneDigit <= 9) table[i] += table[i - 1];
        // If the two-digit number is between 10(j) and 26(z) (inclusive), update the table
        if (twoDigit >= 10 && twoDigit <= 26) table[i] += table[i - 2];
    }
    return table[table.length - 1];
};