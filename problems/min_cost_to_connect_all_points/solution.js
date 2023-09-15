/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    let sum = 0; // Initialize the total sum of minimum costs.
    const length = points.length; // Get the number of points.
    const minHeap = new MinPriorityQueue({ priority: (item) => item[0] }); // Create a min heap for prioritizing distances.
    const visited = new Set(); // Create a set to keep track of visited points.

    visited.add(JSON.stringify(points[0])); // Mark the first point as visited.

    for (let i = 1; i < length; i++) {
        // Add the distances from the first point to all other points to the min heap.
        const item = [getDistance(points[0], points[i]), points[i]];
        minHeap.enqueue([getDistance(points[0], points[i]), points[i]]);
    }

    while (visited.size < length) {
        // Continue until all points are visited.
        const [cost, point] = minHeap.dequeue().element; // Dequeue the point with the minimum distance.

        if (visited.has(JSON.stringify(point))) continue; // Skip if the point has already been visited.

        visited.add(JSON.stringify(point)); // Mark the point as visited.
        sum += cost; // Add the cost to the total sum.

        // Add new points to the minHeap as potential next steps.
        for (let i = 0; i < length; i++) {
            const distance = getDistance(point, points[i]); // Calculate the distance to the next point.

            if (visited.has(JSON.stringify(points[i]))) continue; // Skip if the next point has already been visited.
            if (distance === 0) continue; // Skip if the distance is zero (same point).
            minHeap.enqueue([distance, points[i]]); // Enqueue the distance and the next point.
        }
    }

    return sum; // Return the total minimum cost.
};

function getDistance(p1, p2) {
    // Calculate the distance between two points using Manhattan distance.
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}
