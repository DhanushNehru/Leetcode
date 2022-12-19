/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
   let adjList = {}, visited = [];

    // For Input : n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2

    for (const edge of edges){
        adjList[edge[0]] ? adjList[edge[0]].push(edge[1]) :
            adjList[edge[0]] = [edge[1]];
        
        adjList[edge[1]] ? adjList[edge[1]].push(edge[0]) :
            adjList[edge[1]] = [edge[0]];
        
    };
    
    // adjList 
    // { '0': [ 1, 2 ], '1': [ 0, 2 ], '2': [ 1, 0 ] }

    const stack = [source];
    visited[source] = true;
    
    // Stack  [ 0 ]

    while(stack.length){
        const current = stack.pop();
        if(current === destination) return true;
        for(let neighbour of adjList[current]) {
            // if a node is visited we set it as true
            // we push each neighbour value to stack if not visited

            if(!visited[neighbour]){
                stack.push(neighbour);
                visited[neighbour] = true;
            }
        }
    }
    
    return false;
};