/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    // visited set
    const visited = new Set();
    // friend circles count
    let circles = 0;
	
    // iterate thru matrix
    for (let i = 0; i < isConnected.length; i++) {
        // check if this friend has been visited before
        if (!visited.has(i)) {
            // start dfs for this friend
            dfs(i);
            // this is another friend circle
            circles++;
        }
    }
	
    return circles;
	
    // helper method to do dfs traversal thru isConnected
    function dfs(i) {
        // go thru this friend's friends
        for (let j = 0; j < isConnected.length; j++) {
            // check if this is a friend, and not visited before
            if (isConnected[i][j] === 1 && !visited.has(j)) {
                // add as visited
                visited.add(j);
                // call dfs
                dfs(j);
            }
        }
    }
    
};