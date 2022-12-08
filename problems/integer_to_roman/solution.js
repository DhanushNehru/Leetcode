/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const M = ["", "M", "MM", "MMM"], 
        C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    // Eg) 1994
    // M [ 1994/1000 ] => M[1]
    // C [ (1994%1000) / 100 ] => C [ 994 / 100] => C[9]
    // X [ (1994%100) / 10 ] => X [ 94 / 10 ] => X[9] 
    // I [ (1994%10) ] => I[4]
    return M[Math.floor(num/1000)] + C[Math.floor((num%1000)/100)] + X[Math.floor((num%100)/10)] + I [num%10]
};