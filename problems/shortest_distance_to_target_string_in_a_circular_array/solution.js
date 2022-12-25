/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    if(!words.includes(target)){
        return -1
    }
    
    const findDistance = (direction) => {
        let distance = 0;
        let i=startIndex;
        while(words[i]!==target){
          i = (i + direction + words.length) % words.length;
          distance++;
        } 
        return distance;
    }
    
    const distanceForwards = findDistance(1);
    const distanceBackwards = findDistance(-1);
    
    return Math.min(distanceForwards, distanceBackwards);
};