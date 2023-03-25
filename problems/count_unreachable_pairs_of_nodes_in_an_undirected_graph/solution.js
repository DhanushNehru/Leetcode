/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
    const adjacent = Array.from(Array(n), () => new Array());
    const visited = new Set();
    for (const [V, W] of edges){
        adjacent[V].push(W);
        adjacent[W].push(V);
    }
    
    const DFS = (node) => {
        if (visited.has(node))
            return 0;

        let size = 1;
        visited.add(node);
        for (const neighbor of adjacent[node])
            size += DFS(neighbor);

        return size;
    };

    let result = 0, sumatory = 0;
    for (let node = 0; node < n; node++){
        if (!visited.has(node)){
            const size = DFS(node);
            result += size * sumatory;
            sumatory += size;
        }
    }
    return result;
};