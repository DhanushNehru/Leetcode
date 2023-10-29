/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    // Calculate the maximum time required for a pig to test all buckets
    // Note that this is not simply (minutesToTest / minutesToDie) because we need to account for the possibility
    // that no pig dies immediately, so the poison bucket could be the last one to be tested.
    let max_time = (minutesToTest / minutesToDie) + 1;

    // Initialize the required minimum number of pigs
    let req_pigs = 0;

    // To find the minimum number of pigs needed, we look for the minimum 'req_pigs' such that
    // Math.pow(max_time, req_pigs) is greater than or equal to the total number of buckets.
    while (Math.pow(max_time, req_pigs) < buckets) {
        // Increment 'req_pigs' until it becomes greater than or equal to 'buckets'
        ++req_pigs;
    }

    // Return the required minimum number of pigs
    return req_pigs;    
};