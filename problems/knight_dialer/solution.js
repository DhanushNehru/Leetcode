/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    // modulo value to avoid integer overflow
    const mod = Math.pow(10, 9) + 7
    let totalPaths = 0

    // A 3D array to store the solutions to the subproblems
    const memoizationArray = new Array(n + 1).fill(0).map(() => new Array(4).fill(0).map(() => new Array(3).fill(0)));

    /*
       [ 
           [0,0] [0,1] [0,2] 
           [1,0] [1,1] [1,2] 
           [2,0] [2,1] [2,2] 
           [3,0] [3,1] [3,2] 
       ]
    */

    // Recursive function to calculate the number of distinct paths
    const paths = (i,j,n) => {
        // if the knight hops outside of the matrix or to # or * return 0 
        if(i<0 || j<0 || i>3 || j>2 || (i==3 && j!=1) ){
            return 0
        }

        // If there is only one step remaining, there is only one way to reach the current position
        if(n == 1){
            return 1
        }

        // If the subproblem's solution is already computed, then return it
        if (memoizationArray[n][i][j] > 0) {
            return memoizationArray[n][i][j];
        }

        // knight moves, the indices passes is compared with chessboard position
        // calculate paths recursively and store the result in the memoization array
        memoizationArray[n][i][j] = (paths(i - 1, j - 2, n - 1) % mod + // jump to a
                       paths(i - 2, j - 1, n - 1) % mod + // jump to b
                       paths(i - 2, j + 1, n - 1) % mod + // jump to c
                       paths(i - 1, j + 2, n - 1) % mod + // jump to d
                       paths(i + 1, j + 2, n - 1) % mod + // jump to e
                       paths(i + 2, j + 1, n - 1) % mod + // jump to f
                       paths(i + 2, j - 1, n - 1) % mod + // jump to g
                       paths(i + 1, j - 2, n - 1) % mod ) % mod // jump to h

        return memoizationArray[n][i][j];
    }

    // the dialpad is 4x3 matrix
    for(let i=0;i<4; i++){
        for(let j=0;j<3;j++){
            // Calculate and accumulate the number of distinct paths for each starting position
            totalPaths = (totalPaths + paths(i,j,n)) % mod
        }
    }

    return totalPaths; 
};