/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a,b) => a-b)
    let sum = 0, countOfSubsequence=0;
    const result = []
    for(let i=0;i<queries.length;i++){
        for(let j=0;j<nums.length;j++){
            sum+=nums[j]
            if(sum <= queries[i]){
                ++countOfSubsequence;
            }
            else{
                break;
            }
        }
        result.push(countOfSubsequence)
        sum = 0; countOfSubsequence = 0;
    }
    return result;
};