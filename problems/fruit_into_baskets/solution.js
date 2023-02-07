/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const set = new Set()
    let maxFruitsPickResult = 1
    for(let i=0;i<fruits.length;i++){
        let maxFruitsPick = 0, count = 0
        for(j=i; j<fruits.length;j++){
            ++count
            set.add(fruits[j])
            //  we have two baskets & each basket can only hold a single type of fruit
            if(set.size > 2){ 
                break;
            }
            if(set.size <= 2){ 
                maxFruitsPick = count
            }
        }
        maxFruitsPickResult = Math.max(maxFruitsPickResult, maxFruitsPick)
        // below code is to avoid max time 
        if(maxFruitsPickResult == fruits.length - i){
            break;
        }
        set.clear()
    }
    return maxFruitsPickResult;
};