/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    const result = score.sort((a,b) => {
        return b[k]-a[k]
    })
    return result;
};