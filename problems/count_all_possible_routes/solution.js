/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
    // Map to keep track of visited nodes and paths to end with those conditions
    let visited = new Map();

    // Modulo to use
    let mod = 10 ** 9 + 7;

    // DFS function
    let dfs = (current, fuel) => {
        // Generate a key in the "2D" memo matrix
        let id = `${current},${fuel}`

        // If we haven't visited already...
        if (!visited.has(id)) {
            let paths = 0;
            // Count the paths; if we already finished, increment paths
            if (current === finish) paths++;
            // Go through all other positions...
            for (let i = 0; i < locations.length; i++) {
                if (i !== current) {
                    // Calculate remaining fuel
                    let remaining = fuel - Math.abs(locations[current] - locations[i]);
                    // If sufficient fuel, DFS further from current position
                    if (remaining >= 0) {
                        paths += dfs(i, remaining);
                    }
                }
            }
            visited.set(id, paths % mod)
        }

        // Finally, cache result
        return visited.get(id);
    }

    // Run DFS on starting node
    return dfs(start, fuel);
};