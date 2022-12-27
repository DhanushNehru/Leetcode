/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    // first we sort based on the number of units in descending order
    // as we need to return the max num of units that can be put in truck
    boxTypes.sort((a,b)=> b[1]- a[1])
    let maxNumOfUnitsInTruck = 0, index = 0;
    while(index<boxTypes.length){
        // we decrease the truck size based on numberOfBoxes for every iteration 
        truckSize -= boxTypes[index][0]
        if(truckSize>=0){
            // we calculate the truck size accordingly
            maxNumOfUnitsInTruck+= boxTypes[index][0] * boxTypes[index][1];
        }
        else{
            // the truckSize when it becomes negative it means only countable boxes can be taken and we calculate that
            maxNumOfUnitsInTruck+= (truckSize + boxTypes[index][0]) * boxTypes[index][1];
            break;
        }
        ++index
    }
    return maxNumOfUnitsInTruck
};