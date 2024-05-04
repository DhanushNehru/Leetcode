/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a-b)
    let i=0, j=people.length-1, boats = 0;
    while(i<=j){
        if(people[i] + people[j] <= limit){
            i++
        }
        j--;
        ++boats;
    }
    return boats;
};
