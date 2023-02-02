/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

var isAlienSorted = function(words, order) {
    let map = new Map()
    // we assign priority values to each character in order string
    for(let i=0;i<order.length;i++){
        map.set(order[i], i)
    }
    for (let j = 1; j < words.length; j++) {
        const prev = words[j-1];
        const curr = words[j];
    
        if (map.get(prev[0]) > map.get(curr[0])) {
            return false;
        } else if (prev[0] === curr[0]) {
            let pointer = 1;
            while (prev[pointer] === curr[pointer] && pointer < Math.max(curr.length, prev.length)) {
                pointer++;
            }
            if ((map.get(prev[pointer]) >= 0 && !map.get(curr[pointer])) 
                || map.get(prev[pointer]) > map.get(curr[pointer])) {
                return false;
            }
        }
    }
    return true;
};