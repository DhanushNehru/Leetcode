/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const set = new Set()

    for(path of paths){
        // Add the starting city of each path to the set
        set.add(path[0])
    }

    // The destination city must not be in this set.
    // as the destination city wont have further paths
    for(path of paths){
        if(!set.has(path[1])){
            return path[1]
        }
    }
};