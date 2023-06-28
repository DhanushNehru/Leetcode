/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start, end) {
  const p = Array(n).fill(0);
  const graph = p.reduce((m, _, i) => m.set(i, []), new Map());
  edges.forEach(([u, v], i) => {
    graph.get(u).push([v, succProb[i]]);
    graph.get(v).push([u, succProb[i]]);
  });
  
  const queue = [[start, 1]];
  p[start] = 1;
  
  for (let [node, currP] of queue) {   
    for (let [adj, nextP] of graph.get(node)) {
      if (currP * nextP > p[adj]) {
        p[adj] = currP * nextP;
        queue.push([adj, p[adj]]);
      }
    }
  }
  
  return p[end];
};