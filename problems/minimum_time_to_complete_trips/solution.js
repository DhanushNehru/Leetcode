/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let low = 1;
    let high = Number.MAX_SAFE_INTEGER;
    
    while(low <= high) {
        let mid = Math.floor(low + (high - low) / 2); // to prevent overflow
        
        if(isPossible(time, mid, totalTrips)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};

function isPossible(arr, mid, totalTrips) {
    let trips = 0;
    for (let i = 0; i < arr.length; i++) {
      trips += Math.floor(mid / arr[i]);
    }
    return trips >= totalTrips;
}