/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
  let totalSeconds = 0;
  if (hasApple.length < 1 || !hasApple.includes(true)) return totalSeconds;
  const graph = {};
  for (const [x, y] of edges) {
    graph[x] = (graph[x] || new Set()).add(y);
    graph[y] = (graph[y] || new Set()).add(x);
  }

  function performDFS(graph, currentNode, parentNode, edges, hasApple) {
    let subtreeHasApple = false;

    const neighbors = graph[currentNode];

    for (const neighbor of neighbors) {
      if (neighbor === parentNode) continue;

      let appleFoundInSubtree = performDFS(
        graph,
        neighbor,
        currentNode,
        edges,
        hasApple
      );

      if (appleFoundInSubtree) subtreeHasApple = true;
    }

    if ((subtreeHasApple || hasApple[currentNode]) && currentNode !== 0) {
      totalSeconds += 2;
      subtreeHasApple = true;
    }

    return subtreeHasApple;
  }
  performDFS(graph, 0, 0, edges, hasApple);

  return totalSeconds; 
};