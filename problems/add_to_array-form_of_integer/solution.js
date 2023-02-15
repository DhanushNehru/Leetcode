/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    num = BigInt(num.toString().replaceAll(',',''))
    return (BigInt(num+BigInt(k))+"").split("")
};