/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
    // we have to avoid using same start ch
    // we have to avoid using same other ch
    //["cake","coffee","donuts","time","toffee"]
    // cake    toffee
    // coffee  time

    // cake   donuts
    // coffee
    // 2 * (ch1.size - sameCount) * (ch2.size - sameCount)

    let map = {}

    for(let idea of ideas){
        let firstC = idea.slice(0,1)
        let others = idea.slice(1)
        if(!map[firstC]) map[firstC] = new Set()
        map[firstC].add(others)
    }
    
    let keys = Object.keys(map);
    let count = 0;

    for(let i =0; i<keys.length; i++){
        let firstSet = map[keys[i]]
        for(let j =i+1; j<keys.length; j++){
            let secondSet = map[keys[j]]
            let sameCount = 0;
            for(let c of firstSet){
                if(secondSet.has(c)) sameCount++ 
            }

            count += 2 * (firstSet.size - sameCount) * (secondSet.size - sameCount)
        }
    }

    return count;
};