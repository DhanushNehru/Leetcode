/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    // Set to store unique winners, and an object to store the count of losses for each player
    const winners = new Set(), loosers = {}

    for(let i=0;i<matches.length;i++){
        // Update the count of losses for the player 
        loosers[matches[i][1]] = loosers[matches[i][1]] ? loosers[matches[i][1]] + 1 : 1
        // Add the winner of the match to the winners set
        winners.add(matches[i][0])
    }

    const answer = [[], []]

    for(let obj in loosers){
        // list of all players that have lost exactly one match.        
        if(loosers[obj] == 1){
            answer[1].push(obj)
        }
        // list of all players that have not lost any matches.
        winners.delete(Number(obj))
    }

    answer[0] = [...winners].sort((a,b) => a-b)

    return answer
};