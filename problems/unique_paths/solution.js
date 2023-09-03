/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Calculate the number of unique paths from (0,0) to (m-1,n-1) in a grid.
    
    // Calculate the number of ↓ (down) moves needed, which is (m-1).
    // Calculate the number of → (right) moves needed, which is (n-1).
    
    // To find the number of unique paths, we use combinations.
    // The number of unique paths is the number of permutations of (m-1) ↓ moves and (n-1) → moves.
    
    // Using the combination formula: ( m + n ) ! / (m)! * (n)!
    
    // Calculate the number of unique paths using the combination formula and store it in pathCount.
    let pathCount = factorial( m-1 + n-1 ) / ( factorial( m-1 )*factorial( n-1 ) );
    
    // Return the calculated number of unique paths.
    return pathCount
};

// Define a factorial function that takes a parameter k.
var factorial = function( k ){
    
    // Check if k is 0 or 1. If it is, return 1 since factorial(0) and factorial(1) are both 1.
    if( k == 0 || k == 1 ){
        return 1;
    } else {
        // If k is greater than 1, calculate the factorial recursively by multiplying k with factorial(k-1).
        return k * factorial(k-1);
    }
    
};
