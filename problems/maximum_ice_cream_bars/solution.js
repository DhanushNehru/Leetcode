/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    // first we sort the costs in ascending order
    costs.sort((a,b)=> a-b)
    let maxIceCreamBarsCount = 0, result=0, coinsCount=0;
    for(let i=0;i<costs.length;i++){
        coinsCount+=costs[i]
        if(coinsCount<=coins){
            ++result
        }
        else{
            break;
        }    
    }
    return result;
};