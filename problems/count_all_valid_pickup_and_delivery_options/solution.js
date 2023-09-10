/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    const MOD = 1e9 + 7;

    // Initialize a variable 'count' to 1, as there is always at least one valid order sequence.
    let count = 1;

    for (let i = 2; i <= n; i++) {
        // Calculate the number of valid order sequences for the current 'i' value and update 'count'.
        // Multiply 'count' by (2 * i - 1) and then by 'i'.
        // This accounts for the possible pickup and delivery events for the current order 'i'.
        // The formula is designed to handle the constraint where the delivery must always come after the pickup.
        count = (count * ((2 * i) - 1) * i) % MOD;
    }

    // Return the final 'count' value as the total number of valid order sequences modulo 'MOD'.
    return count;
};
