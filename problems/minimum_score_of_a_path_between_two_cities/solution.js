/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const graph = new Array(n + 1).fill().map(() => []);
    const visited = new Set([]);

    for (const [v1, v2, distance] of roads) {
        graph[v1].push([v2, distance]);
        graph[v2].push([v1, distance]);
    }

    // graph
    // [
    //     [],
    //     [ [ 2, 9 ], [ 4, 7 ] ],
    //     [ [ 1, 9 ], [ 3, 6 ], [ 4, 5 ] ],
    //     [ [ 2, 6 ] ],
    //     [ [ 2, 5 ], [ 1, 7 ] ]
    // ]

    const queue = [1];
    visited.add(1);
    let ans = Infinity;

    while (queue.length > 0) {
      const node = queue.shift();
      for (const [next, distance] of graph[node]) {
        ans = Math.min(ans, distance);
        if (visited.has(next)){
            continue;
        } 

        visited.add(next);
        queue.push(next);
      }
    }

    return ans;

};