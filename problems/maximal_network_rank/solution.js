/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    // Create a map to store the adjacency lists for each city
    const map = new Map();

    // Populate the adjacency lists based on the given roads
    for (let i = 0; i < roads.length; i++) {
        // Add the second city to the adjacency list of the first city
        if (map.has(roads[i][0])) {
            map.get(roads[i][0]).push(roads[i][1]);
        } else {
            map.set(roads[i][0], [roads[i][1]]);
        }
        
        // Add the first city to the adjacency list of the second city
        if (map.has(roads[i][1])) {
            map.get(roads[i][1]).push(roads[i][0]);
        } else {
            map.set(roads[i][1], [roads[i][0]]);
        }
    }

    // Initialize the maximum rank
    let maxRank = 0;

    // Iterate through all pairs of cities
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Initialize the rank for the current pair
            let rank = 0;

            // If the first city has adjacent cities, add their count to rank
            if (map.has(i)) {
                rank += map.get(i).length;
            }

            // If the second city has adjacent cities, add their count to rank
            if (map.has(j)) {
                rank += map.get(j).length;
            }

            // If there's a direct road between i and j, we double-counted it, so subtract 1
            if (map.has(i) && map.get(i).includes(j)) {
                rank--;
            }

            // Update the maximum rank
            maxRank = Math.max(maxRank, rank);
        }
    }

    // Return the maximum rank
    return maxRank;
};