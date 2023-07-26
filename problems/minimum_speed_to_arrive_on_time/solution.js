/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    // Distance = Speed x Time
    // Function to calculate the time taken to travel given distance at a particular speed
    const getHour = (dist, speed) => {
        let sum = 0;
        // Loop through the distances array except the last element
        // and calculate the time taken for each segment at the given speed
        for (let i = 0; i < dist.length - 1; i++){
            sum += Math.ceil(dist[i] / speed); // Ceil is used to round up the time to the nearest integer
        }
        // Calculate the time taken for the last segment at the given speed
        sum += dist[dist.length - 1] / speed;
        return sum; // Return the total time taken to cover the entire distance at the given speed
    }

    // Initialize the variables to perform binary search
    let l = 0, m, sum, res = -1, r = 10000000; // l = left boundary, r = right boundary, m = mid point, res = result
    
    // Perform binary search to find the minimum speed required to reach the destination on time
    while (l < r){
        m = Math.floor((l + r) / 2); // Calculate the mid point speed
        sum = getHour(dist, m); // Calculate the time taken at mid point speed
        
        // If the calculated time is less than or equal to the given hour,
        // update the result and search in the left half of the speed range
        if (sum <= hour){
            res = m; // Update the result to the current mid point speed
            r = m; // Move the right boundary to the mid point to search in the left half
        } 
        // If the calculated time is greater than the given hour,
        // search in the right half of the speed range
        else l = m + 1; // Move the left boundary to the next speed value to search in the right half
    }
    
    // Check if the result is still -1 (i.e., not found) and if the time taken at the right boundary speed
    // is less than or equal to the given hour. If so, update the result to the right boundary speed.
    if (res === -1 && getHour(dist, r) <= hour) res = r;
    
    return res; // Return the minimum speed required to reach the destination on time
};