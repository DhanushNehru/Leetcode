/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    // since ages & scores length is same
    const length = scores.length
    const ageScoreArr = []
    for(let i=0;i<length;i++){
        ageScoreArr[i] = [ages[i], scores[i]]
    }
    console.log(" age sc arr ", ageScoreArr)
    // if two playes have the same age, the player with highest score comes first
    ageScoreArr.sort((a,b)=> a[0] === b[0] ? a[1]-b[1] : a[0] - b[0])
    // ageScoreArr is sorted based on age, where the max score comes first if age is same

    const maxPossibleScoreArr =  [];
    let maxScore = 0;
    for(let i=0;i<length;i++){
        maxPossibleScoreArr[i] = ageScoreArr[i][1]
        for(let j=0;j<i;j++){
            if(ageScoreArr[i][1] >= ageScoreArr[j][1]){
                maxPossibleScoreArr[i] = Math.max(
                    maxPossibleScoreArr[i], 
                    maxPossibleScoreArr[j]+ ageScoreArr[i][1])
            }
        }
        console.log(" Max Possible Score Arr")
        console.log(" Max Score ", maxScore , " Max Possible Score Arr ", maxPossibleScoreArr[i])
        maxScore = Math.max(maxScore, maxPossibleScoreArr[i])
    }
    return maxScore
};