/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
    let index = new Array(n).fill().map((_,i) => i);
    let keys = new Array(queries.length).fill().map((_,i) => i)
    let result = new Array(queries.length), j = 0

    const find = (x) => x !== index[x] ? index[x] = find(index[x]) : index[x]
    const union = (x,y) => index[find(x)] = find(y)
    edgeList.sort((a,b) => a[2] - b[2])
    keys.sort((a,b) => queries[a][2] - queries[b][2])

    for (let i of keys) {
        let [a,b,c] = queries[i]
        while (edgeList[j]?.[2] < c) union(edgeList[j][0], edgeList[j++][1])
        result[i] = find(a) === find(b)
    }
    return result
};