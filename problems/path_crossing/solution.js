/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    // Initialize starting position and a set to store visited points
    let x = 0, y = 0, point = `${x} ${y}`;
    const set = new Set([point])

    for(direction of path){
        // Update position based on the current direction
        if(direction == "N"){
            ++x;
        }
        else if(direction == "E"){
            ++y;
        }
        else if(direction == "W"){
            --y;
        }
        else if(direction == "S"){
            --x
        }

        point = `${x} ${y}`;
        // Check if the point has been visited before
        if(set.has(point)){
            return true
        }
        else{
            // If the point is not visited, add it to the set
            set.add(point)
        }
    }
    // If no crossing occurred during the entire path, return false
    return false
};