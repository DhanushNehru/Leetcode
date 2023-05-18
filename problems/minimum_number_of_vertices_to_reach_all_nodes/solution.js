/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const map = {}
    const result = []

    for(let [index, value] of edges){
        map[value] = 1
    }

    for (let i = 0; i < n; i++) {
        if (!map[i]) result.push(i);
    };

    return result;
};