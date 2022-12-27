/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
   for(let i=0;i<capacity.length;i++){
       // as 0 <= rocks[i] <= capacity[i]
       rocks[i] = capacity[i] - rocks[i]
   }
   rocks.sort((a,b)=> a-b)
   let numOfBagsWithFullCapacity = 0;
   let index = 0;
    while(additionalRocks > 0 && index < rocks.length){
        // we subtract the index value of rocks array ( it is sorted ascending )
        additionalRocks -= rocks[index]
        if (additionalRocks >= 0) {
            numOfBagsWithFullCapacity++
        }
        index++
    }
    return numOfBagsWithFullCapacity
};