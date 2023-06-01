/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    // first we set the directions
    const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
	];

    // If the first itself is 1 then no path exist 
    if (grid[0][0] === 1) return -1;

    const N = grid.length;
	const queue = [[0, 0, 1]]; // [row, col, path]

    while (queue.length) {
		const [row, col, path] = queue.shift(); // shift removes the first element

		if (row === N - 1 && col === N - 1) return path; // reached destination

		for (const [dx, dy] of directions) { // traverse adjacents
			let x = row + dx;
			let y = col + dy;

			// if invalid, continue
			if (x < 0 || x >= N) continue;
			if (y < 0 || y >= N) continue;
			if (grid[x][y] !== 0) continue;

			queue.push([x, y, path + 1]); // add new path to queue
			grid[x][y] = 1; // mark visited
		}
	}

	return -1;

};