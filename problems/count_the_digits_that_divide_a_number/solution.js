/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
  const nStr = num.toString();
  let count = 0;
  for (const ch of nStr) {
    if (num % Number(ch) === 0) {
      count += 1;
    }
  }
  return count;
};