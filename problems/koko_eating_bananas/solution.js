/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let min = 1, max = Math.max(...piles)

    // Distance = Speed x Time
    const time = (speed) => {
        return piles.reduce((sum, pile) => sum + Math.ceil(pile/speed), 0)
    }

    while(min<=max){
        const mid = Math.floor((min + max) / 2)
        if (time(mid) <= h) {
            max = mid - 1
        } else{
            min = mid + 1
        }       
    }
    return min
};

