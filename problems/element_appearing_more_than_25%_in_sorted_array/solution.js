/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    // Calculate the minimum number of occurrences needed (25%)
    let size = arr.length;
    let qtr = Math.floor(size / 4);
    let count = 1;
    let p = arr[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < size; i++) {
        // Check if the current element is equal to the previous element
        if (p === arr[i]) {
            // If yes, increment the count
            count++;
        } else {
            // If not, reset the count
            count = 1;
        }

        // Check if the count is greater than the required quarter
        if (count > qtr) {
            // If yes, return the current element as the special digit
            return arr[i];
        }

        // Update the previous element variable
        p = arr[i];
    }

    // If no special digit is found, return the last element
    return p;
};