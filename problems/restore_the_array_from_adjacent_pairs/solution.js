/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    // Create a map to represent the graph
    const graph = new Map();

    // Build the graph using the given adjacent pairs
    for (const [u, v] of adjacentPairs) {
        // If the node 'u' is not in the graph, add it with an empty array as its value
        if (!graph.has(u)) graph.set(u, []);
        
        // If the node 'v' is not in the graph, add it with an empty array as its value
        if (!graph.has(v)) graph.set(v, []);
        
        // Add 'v' to the neighbors of 'u', and add 'u' to the neighbors of 'v'
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    // Initialize the result array
    let result = [];

    // Find the starting node with only one neighbor
    for (const [node, neighbors] of graph.entries()) {
        if (neighbors.length === 1) {
            // Set the result array with the starting node and its neighbor
            result = [node, neighbors[0]];
            break;
        }
    }

    // Reconstruct the array based on the graph
    while (result.length < adjacentPairs.length + 1) {
        // Get the last and second-to-last elements in the result array
        const [last, prev] = [result[result.length - 1], result[result.length - 2]];
        
        // Get the neighbors of the last element in the result array
        const candidates = graph.get(last);
        
        // Determine the next element by choosing the neighbor that is not the previous element
        const nextElement = candidates[0] !== prev ? candidates[0] : candidates[1];
        
        // Add the next element to the result array
        result.push(nextElement);
    }

    // Return the reconstructed array
    return result;    
};