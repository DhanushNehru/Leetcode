/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
  let visited = new Set();
  let longest = -1;
  for(let i = 0; i < edges.length; i++) {
    let session = new Map();
    
    let curCycleLen = isCyclic(edges, visited, session, i, 0);
    if(curCycleLen > longest) longest = curCycleLen;
  }
  return longest;
};

// if cyclic, return length of cycle, else return -1
function isCyclic(edges, visited, session, key, len) {
  // total length - length of non cyclic part
  if(session.has(key)) return len-session.get(key);
  if(visited.has(key)) return -1;
  
  session.set(key, len);
  visited.add(key);
  
  if(edges[key] >= 0) return isCyclic(edges, visited, session, edges[key], len+1);
  
  session.delete(key);
}