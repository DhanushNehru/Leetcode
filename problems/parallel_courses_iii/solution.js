/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function(n, relations, time) {
    // Create an adjacency list 'adj' to represent course dependencies.
    // Initialize an empty array for each course.
    let adj = Array.from({ length: n + 1 }, () => []);

    // Populate the adjacency list based on the 'relations' array.
    for (let [prevCoursej, nextCoursej] of relations) {
        adj[prevCoursej].push(nextCoursej);
    }

    // Create a cache object to store the computed results for each course.
    let cache = {};

    // Define a depth-first search function to find the minimum time required.
    const dfs = (node) => {
        // If we have already computed the result for this course, return it from the cache.
        if (node in cache) return cache[node];

        // Initialize 'max' to 0, which will be used to find the maximum time among prerequisites.
        let max = 0;

        // Iterate through the prerequisites of the current course.
        adj[node].forEach((n) => {
            // Recursively call 'dfs' on each prerequisite and update 'max' with the maximum time.
            max = Math.max(max, dfs(n));
        });

        // Calculate the total time required for the current course, including its prerequisites.
        let total = time[node - 1] + max;

        // Store the computed result in the cache.
        cache[node] = total;

        // Return the total time required for the current course.
        return total;
    }

    // Initialize 'max' to 0, which will be used to find the maximum time required for any course.
    let max = 0;

    // Iterate through all courses (from 1 to 'n') and find the maximum time using 'dfs'.
    for (let i = 1; i <= n; ++i) {
        max = Math.max(max, dfs(i));
    }

    // Return the maximum time required for completing all courses.
    return max;
};
