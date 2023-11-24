/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    // we should sort input array, so that we can easily take the maximum number of coins and minimum number of coins from input array
    piles.sort((a,b) => a-b );

    const pilesLength = piles.length;  

    // To get maximum number of coins, we should choose 2 piles from the last and 1 pile from the beginning
    let iVal = Math.floor(pilesLength/3)  

    let result = 0;
    // Based on the example [1,2,3,4,5,6,7,8,9] we need to select 3, 6, 9 => 18
    for(let i=iVal;i<pilesLength;i+=2){
        result += piles[i]
    }

    return result;
};