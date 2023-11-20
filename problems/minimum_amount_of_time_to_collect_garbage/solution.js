/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */

// By iterating in reverse order, the function effectively finds the last occurrence of the specified garbage type in the array and adjusts the result based on the travel distance.
const garbageTypeOperation = (garbageType, garbage, garbageLength, travel ,result) => {
        
    // we can use garbageLength - 1 or travel.length as travel.length == garbage.length - 1
    for (let i = garbageLength - 1; i > 0; i--) {
        // Check if the current garbage item does not include the specified garbage type
        if (!garbage[i].includes(garbageType)) {
            // Subtract travel distance from result
            result -= travel[i - 1];
        } else {
            break;
        }
    }
    return result
}

var garbageCollection = function(garbage, travel) {
        const garbageLength = garbage.length;
        let result = 0;

        // Calculate the initial time result based on travel times between houses 
        result += 3 * travel.reduce((a,b) => a+b)
        /*
        for (let i = 0; i < garbageLength - 1; i++) {
            result += 3 * travel[i];
        }
        */

        // and the length of each garbage assortment
        result += garbage.join("").length;
        /*
        for (const s of garbage) {
            result += s.length;
        }
        */

        // Iterate backward through the houses and subtract travel times if a type of garbage is not present in that house.
        result = garbageTypeOperation("G", garbage, garbageLength, travel, result)
        result = garbageTypeOperation("P", garbage, garbageLength, travel, result)
        result = garbageTypeOperation("M", garbage, garbageLength, travel, result)

        return result;    
};