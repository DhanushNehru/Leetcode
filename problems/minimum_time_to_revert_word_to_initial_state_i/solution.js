/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumTimeToInitialState = function(word, k) {
    const n = word.length;
    let count = 1;

    for (let i = k; i < n; i += k) {
        const a = word.substring(i, n);
        const b = word.substring(0, n - i);

        if (a === b) {
            return count;
        } else {
            count++;
        }
    }

    return count;
};