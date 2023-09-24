/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    
    // Create a 2D array 'tower' to represent the champagne glasses.
    // The dimensions are determined by 'query_row' + 1 for rows and 'query_row' + 1 for glasses in each row.
    const tower = new Array(query_row + 1).fill(0).map(() => new Array(query_row + 1).fill(0));
    
    // Pour the initial amount of champagne into the top glass (row 0, glass 0).
    tower[0][0] = poured;

    // Loop through each row up to 'query_row'.
    for (let row = 0; row < query_row; row++) {
        // Loop through each glass in the current row (up to 'row').
        for (let glass = 0; glass <= row; glass++) {
            // Calculate the excess champagne that overflows from the current glass.
            const excess = (tower[row][glass] - 1) / 2.0;
            
            // If there is excess champagne, distribute it equally to the two glasses in the next row.
            if (excess > 0) {
                tower[row + 1][glass] += excess;          // Glass below and to the left.
                tower[row + 1][glass + 1] += excess;      // Glass below and to the right.
            }
        }
    }

    // Return the minimum of 1 (since champagne cannot exceed 1 in a glass) and the amount of champagne
    // in the specified 'query_glass' of the 'query_row'.
    return Math.min(1, tower[query_row][query_glass]);
};
