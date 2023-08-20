/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const initializeGraphSet = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push(new Set()); } return G; };

var sortItems = function(n, m, group, beforeItems) {
    for (let i = 0; i < n; i++) {
        if (group[i] == -1) {
            group[i] = m++;
        }
    }
    let gg = initializeGraphSet(m); // graph group
    let gi = initializeGraphSet(n); // graph item
    let indegreeGG = Array(m).fill(0);
    let indegreeGI = Array(n).fill(0);
    let res = [];
    for (let i = 0; i < n; i++) {
        let to = group[i];
        for (const x of beforeItems[i]) {
            let from = group[x];
            if (from != to && !gg[from].has(to)) {
                gg[from].add(to);
                indegreeGG[to]++;
            }
            if (!gi[x].has(i)) {
                gi[x].add(i);
                indegreeGI[i]++;
            }
        }
    }
    let ggOrder = topologicalSort(gg, indegreeGG);
    let giOrder = topologicalSort(gi, indegreeGI);
    if (ggOrder.length == 0 || giOrder.length == 0) return [];
    let group2Item = initializeGraph(m);
    for (const item of giOrder) group2Item[group[item]].push(item);
    for (const group_id of ggOrder) {
        for (const item of group2Item[group_id]) {
            res.push(item);
        }
    }
    return res;
};

const topologicalSort = (g, indegree) => {
    let res = [], q = [], len = indegree.length;
    for (let i = 0; i < len; i++) {
        if (indegree[i] == 0) q.push(i);
    }
    while (q.length) {
        let cur = q.shift();
        res.push(cur);
        for (const child of g[cur]) {
            if (--indegree[child] == 0) q.push(child);
        }
    }
    for (let i = 0; i < len; i++) {
        if (indegree[i] > 0) return [];
    }
    return res;
};