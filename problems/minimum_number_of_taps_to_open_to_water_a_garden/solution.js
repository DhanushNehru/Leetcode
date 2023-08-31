/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    // Create an array to store the maximum right boundary of each tap's coverage
    const maxRange = new Array(n + 1).fill(0);
    
    // Iterate through each tap's range and update the maxRange array
    for (let i = 0; i < ranges.length; i++) {
        const left = Math.max(0, i - ranges[i]); // Calculate the left boundary of tap coverage
        const right = Math.min(n, i + ranges[i]); // Calculate the right boundary of tap coverage
        maxRange[left] = Math.max(maxRange[left], right); // Update the maximum right boundary within the left and right boundaries
    }
    
    let end = 0; // The current rightmost boundary covered by taps
    let farthest = 0; // The farthest reachable boundary from the current position
    let taps = 0; // Count of taps used
    let i = 0; // Index used for iteration
    
    // Loop until the entire garden is covered
    while (end < n) {
        // Iterate through taps within the current covered area and find the farthest boundary
        while (i <= end) {
            farthest = Math.max(farthest, maxRange[i]); // Update the farthest reachable boundary
            i++;
        }
        
        // Check if there is a gap in coverage that can't be bridged
        if (farthest <= end) {
            return -1;  // Unable to cover the entire garden
        }
        
        end = farthest; // Extend the covered area to the farthest reachable boundary
        taps++; // Increment the count of taps used
    }
    
    return taps; // Return the minimum number of taps required
};
