/**
 * @param {number} n
 */
var SeatManager = function(n) {
    // Constructor for the SeatManager class.
    // 'n' represents the total number of seats.
    this.reserved = new Array(n).fill(0);
    // Initialize an array called 'reserved' to keep track of seat reservations.
    // Each element in 'reserved' represents a seat, and 0 means it's unreserved.
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    // Method to reserve a seat.
    // It returns the seat number of the reserved seat.

    // Find the first unreserved seat by searching for 0 in the 'reserved' array.
    const found = this.reserved.indexOf(0);

    if (found !== -1) {
        // If an unreserved seat is found, mark it as reserved (set it to 1).
        this.reserved[found] = 1;
    }

    // Return the seat number of the reserved seat (found + 1).
    // Seat numbers are 1-based, so we add 1 to the array index.
    return found + 1;
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    // Method to unreserve a specific seat by seat number.
    // 'seatNumber' is the seat to be unreserved.

    // Unreserve the seat by setting the corresponding element in 'reserved' to 0.
    this.reserved[seatNumber - 1] = 0;
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */