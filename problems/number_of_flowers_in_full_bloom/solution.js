/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    // Create a Map to track the difference in flower counts at each time point
    const diff = new Map();

    // Process the flower intervals and update the difference Map
    for (const [start, end] of flowers) {
        // Increase the flower count at the start time by 1
        diff.set(start, (diff.get(start) ?? 0) + 1);
        // Decrease the flower count at the end time by 1
        diff.set(end + 1, (diff.get(end + 1) ?? 0) - 1);
    }

    // Get a sorted list of time points (keys of the 'diff' Map)
    const times = [...diff.keys()].sort((a, b) => a - b);

    // Get a sorted list of indices for people based on their visiting times
    const id = [...people.keys()].sort((i, j) => people[i] - people[j]);
    
    let j = 0; // Initialize a pointer for iterating through 'times'
    let sum = 0; // Initialize a sum to keep track of the flower counts
    
    for (const i of id) {
        while (j < times.length && times[j] <= people[i]) {
            // Update the sum by adding the difference at the current time
            sum += diff.get(times[j++]);
        }

        // Store the total number of blooming flowers at the time when the person visits
        people[i] = sum;
    }

    return people; // Return the updated 'people' array with flower counts
};
