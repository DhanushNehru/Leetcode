/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
  const n = arr.length;
    if (n === 1) return 0; // edge case: only one element, no jumps needed
    const jumps = new Array(n).fill(-1); // initialize jumps array to -1
    const graph = new Map(); // create a map to represent the graph of connections
    for (let i = 0; i < n; i++) {
        if (!graph.has(arr[i])) graph.set(arr[i], []);
        graph.get(arr[i]).push(i); // add current index to the list of indexes with the same value
    }
    const q = [0]; // start BFS from index 0
    jumps[0] = 0; // first jump is free
    while (q.length > 0) {
        const currIndex = q.shift();
        const currValue = arr[currIndex];
        const neighbors = graph.get(currValue);
        if (neighbors) { // add a check for truthy value
            for (const neighborIndex of neighbors) {
                if (jumps[neighborIndex] === -1) { // if neighbor has not been visited yet
                    jumps[neighborIndex] = jumps[currIndex] + 1; // update number of jumps
                    q.push(neighborIndex); // add neighbor to the queue
                }
            }
            graph.delete(currValue); // remove current value from the graph to avoid revisiting it
        }
        if (currIndex - 1 >= 0 && jumps[currIndex - 1] === -1) { // check left neighbor
            jumps[currIndex - 1] = jumps[currIndex] + 1; // update number of jumps
            q.push(currIndex - 1); // add left neighbor to the queue
        }
        if (currIndex + 1 < n && jumps[currIndex + 1] === -1) { // check right neighbor
            jumps[currIndex + 1] = jumps[currIndex] + 1; // update number of jumps
            q.push(currIndex + 1); // add right neighbor to the queue
        }
    }
    return jumps[n - 1]; // return minimum number of jumps to reach the last index
};