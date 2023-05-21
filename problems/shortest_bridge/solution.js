/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    let aIsland = [];
    let bIsland = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {

            if (grid[i][j] == 1) {


                if (!aIsland.length) {
                    dfs(grid, i, j, aIsland)
                } else if (!bIsland.length) {
                    dfs(grid, i, j, bIsland)
                }
            }
        }
    }


    let diff = aIsland.length > bIsland.length ? calculateDistance(bIsland, aIsland) : calculateDistance(aIsland, bIsland);
    return diff


    function dfs(grid, i, j, result) {

        if (i < 0 || j < 0 || i >= grid.length || j >= grid.length || grid[i][j] != 1) return;

        //mark as visited
        grid[i][j] = 0;
        result.push([i, j])

        dfs(grid, i - 1, j, result);
        dfs(grid, i + 1, j, result);
        dfs(grid, i, j - 1, result);
        dfs(grid, i, j + 1, result);
    }



    function calculateDistance(aDistances, bDistance) {
        let min = Infinity;

        for (let i = 0; i < aDistances.length; i++) {
            for (let j = 0; j < bDistance.length; j++) {

                //find distance and  -1 beacuse beacuse it includes on of the points
                let calculateDiff = Math.abs(aDistances[i][0] - bDistance[j][0]) + Math.abs(aDistances[i][1] - bDistance[j][1]) - 1
                min = Math.min(calculateDiff, min)
            }
        }

        return min
    }
};