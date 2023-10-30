/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {

    const bitcount = num => {
        return num.toString(2).split('').filter(bit => bit==1).length
    }

    return arr.sort((a,b) => bitcount(a) - bitcount(b) || a - b)
};