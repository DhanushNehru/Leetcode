/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    // Initialize an empty array to store the time it takes for each monster to reach the city
    let time = [];
    const distLength = dist.length

    // Calculate the time it takes for each monster to reach the city and store it in the 'time' array
    for (let i = 0; i < distLength; i++) {
        // Use Math.ceil to round up to the nearest integer, ensuring that the monster is eliminated just in time
        time[i] = Math.ceil(dist[i] / speed[i]);
    }

    // Sort the 'time' array in ascending order
    time.sort((a, b) => a - b);

    // Initialize a variable 'result' to keep track of the maximum number of monsters that can be eliminated
    let result = 0;

    // Iterate through the 'time' array and check if each monster can be eliminated before reaching the city
    for (let i = 0; i < distLength; i++) {
        if (time[i] < i + 1) {
            // If a monster cannot be eliminated in time, return the current 'result'
            return result;
        } else {
            // If the monster can be eliminated, increment the 'result' by 1
            result++;
        }
    }

    // If all monsters can be eliminated before reaching the city, return 'result' which will be equal to 'n'
    return result;
};
