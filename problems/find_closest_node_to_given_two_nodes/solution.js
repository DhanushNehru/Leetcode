/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    let map1 = {}
    let map2 = {}
    let count = 0;

    while(map1[node1] == undefined && node1 != -1){
        map1[node1] = count;
        count++
        node1 = edges[node1];
    }
    count = 0;
    while(map2[node2] == undefined && node2 != -1){
        map2[node2] = count;
        count++
        node2 = edges[node2]
    }
    let max = Infinity;
    let res = -1;

    for(let i =0; i<edges.length;i++){
        if(map1[i] == undefined || map2[i] == undefined) continue;
        let localMax = Math.max(map1[i],map2[i])
        if(localMax<max){
            max = localMax;
            res = i;
        }
    }

    return res;
};