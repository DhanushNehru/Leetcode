/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let teams = n; noOfMatchesPlayed = 0;

    // Continue the loop until there is only one winning team
    while(teams > 1){
        // Calculate the number of matches in the current round
        const matches = Math.floor(teams/2)
        // Calculate the remaining teams after the current round
        const rem = teams%2

        // Update the total number of matches played
        noOfMatchesPlayed += matches;
        // Update the number of teams for the next round (matches + remaining)
        teams = matches + rem
    }

    return noOfMatchesPlayed;
};