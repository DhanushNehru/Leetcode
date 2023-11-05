/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

var getWinner = function(arr, k) {
    // If we only need to find the winner for a single round (k = 1), 
    // return the maximum of the first two elements.
    if (k === 1) {
        return Math.max(arr[0], arr[1]);
    }

    // If k is greater than or equal to the length of the array, 
    // return the maximum element in the entire array.
    if (k >= arr.length) {
        return Math.max(...arr);
    }

    // Initialize the current winner and the count of consecutive wins.
    let current_winner = arr[0];
    let consecutive_wins = 0;

    // Loop through the array from the second element (index 1).
    for (let i = 1; i < arr.length; i++) {
        // Compare the current element with the current winner.
        if (current_winner > arr[i]) {
            // If the current element is smaller, increment the consecutive wins count.
            consecutive_wins++;
        } else {
            // If the current element is larger, update the current winner and reset the consecutive wins count to 1.
            current_winner = arr[i];
            consecutive_wins = 1;
        }

        // If the current winner has won k consecutive rounds, return the current winner.
        if (consecutive_wins === k) {
            return current_winner;
        }
    }

    // If we reach this point, return the current winner, as it has won k consecutive rounds.
    return current_winner;
}
