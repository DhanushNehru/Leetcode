/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let results = [];
    let visited = {};
    for(let i = 0; i < graph.length; i++) {        
        if (isNodeSafe(graph, i, visited)) {
            results.push(i);
        }
    }
    return results.sort((a, b) => a - b);
};

const isNodeSafe = (graph, node, visited) => {
    if (visited[node] === true) {
        return false;
    }    
    if (visited[node] === "safe") {
        return true;
    }
    
    visited[node] = true;
    for(let i = 0; i < graph[node].length; i++) {        
        if(!isNodeSafe(graph, graph[node][i], visited)) {
            return false;
        }        
    }
    visited[node] = "safe";   
    return true;
}