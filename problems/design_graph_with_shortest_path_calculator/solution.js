/**
 * @param {number} n
 * @param {number[][]} edges
 */
// Define a Graph constructor function that takes the number of nodes (n) and edges as parameters.
var Graph = function(n, edges) {
    // Initialize the number of nodes (n).
    this.n = n;
    
    // Initialize a 2D array 'distance' to store the distances between nodes.
    this.distance = Array.from({ length: n }, () => Array(n).fill(Number.MAX_SAFE_INTEGER));

    // Set the distance from a node to itself to 0.
    for (let i = 0; i < n; i++) {
        this.distance[i][i] = 0;
    }

    // Populate the 'distance' array with the given edge information.
    for (const edge of edges) {
        this.distance[edge[0]][edge[1]] = edge[2];
    }

    // Use Floyd-Warshall algorithm to find the shortest paths between all pairs of nodes.
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                this.distance[i][j] = Math.min(
                    this.distance[i][j],
                    this.distance[i][k] + this.distance[k][j]
                );
            }
        }
    }    
};

/** 
 * Add an edge to the graph.
 * @param {number[]} edge - An array representing an edge [node1, node2, distance].
 * @return {void}
 */
Graph.prototype.addEdge = function(edge) {
    // If the new distance is not smaller than the existing distance, do nothing.
    if (this.distance[edge[0]][edge[1]] <= edge[2]) {
        return;
    }
    
    // Update the distance between the nodes.
    this.distance[edge[0]][edge[1]] = edge[2];

    // Update all pairs of nodes using the new edge information.
    for (let i = 0; i < this.n; i++) {
        for (let j = 0; j < this.n; j++) {
            this.distance[i][j] = Math.min(
                this.distance[i][j],
                this.distance[i][edge[0]] + edge[2] + this.distance[edge[1]][j]
            );
        }
    }    
};

/** 
 * Get the shortest path between two nodes.
 * @param {number} node1 - Starting node.
 * @param {number} node2 - Destination node.
 * @return {number} - The shortest distance between the two nodes. If unreachable, return -1.
 */
Graph.prototype.shortestPath = function(node1, node2) {
    // If the distance is set to the maximum safe integer, the nodes are not connected.
    if (this.distance[node1][node2] === Number.MAX_SAFE_INTEGER) {
        return -1;
    }
    
    // Return the shortest distance between the two nodes.
    return this.distance[node1][node2];
};


/** 
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */