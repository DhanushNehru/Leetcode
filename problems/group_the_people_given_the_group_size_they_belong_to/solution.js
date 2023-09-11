/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    // Create an empty object to store temporary groups
    const temp_group = {};
    
    // Create an empty array to store the final result
    const result = [];
    
    // Iterate through the groupSizes array
    for(let i = 0; i < groupSizes.length; i++) {
        // Get the size of the current group
        const size = groupSizes[i];
        
        // Check if there is no temporary group for this size, create one
        if (!temp_group[size]) {
            temp_group[size] = [];
        }
        
        // Add the current person's index to the temporary group of the corresponding size
        temp_group[size].push(i);
        
        // Check if the temporary group is now full (equal to its size)
        if(temp_group[size].length === size) {
            // Add the full group to the result
            result.push(temp_group[size]);
            
            // Clear the temporary group for this size since it's been added to the result
            temp_group[size] = [];
        }
    }
    
    // Return the final result containing grouped people
    return result;    
};