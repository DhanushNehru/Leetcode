/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length > 1){
        stones.sort((a,b) => b-a)
        stones[1]=stones[0]-stones[1];//smash the first and second stones 
        // ie the stones with largest weight answer assign the remaining stone weight to 1st index
        stones.shift(); // removes the first element in the array
    }
    return stones[0]
};