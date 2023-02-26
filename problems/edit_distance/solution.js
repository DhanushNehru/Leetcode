/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
   // Get our dynamic programming(dp) matrix setup, no need for default values since we'll be filling each of them
   let dp = Array(word1.length+1).fill().map(()=>Array(word2.length+1)); 
   // r = row , c = column
  const word1Length = word1.length, word2Length = word2.length;
  for (let r=0; r<=word1Length; r++) {
    for (let c=0; c<=word2Length; c++) {
      if (r==0){
        dp[0][c] = c; // here we setup the initial row
      } 
      else if (c==0) {
        dp[r][0] = r; // here the initial column
      }
      else if(word1[r-1] == word2[c-1]) {
        //now, if the letter is the same, cost is the same as the upper left cost
        dp[r][c] = dp[r-1][c-1];
      }
      else {
        //letters are different, so we will either need to change or delete one of the letters so prev cost +1 operation
        dp[r][c] = Math.min(dp[r][c-1],dp[r-1][c-1], dp[r-1][c]) +1;
        // over here we take the minimum of 3 plus 1 ( only if strings are different )
      }
    }
  }
  return dp[word1Length][word2Length]; //return the cost at the end of the string
};