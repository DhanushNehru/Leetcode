/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) {
    const n = s.length;
    const dp = new Array(n+1).fill(0); //contruct dp table initally filled with 0
    const char = s.split(""); //split string to form character array
    dp[n]=1; // base case
    const mod = 1000000007;
    for(let i=n-1; i>=0 ;i--){
        if(char[i]=='0'){
            //skip trailing zeros
            continue;
        }
        let str=""; //build new string when a non zero character is encountered
        str = str+char[i]; // append that character
        let j=i+1; 
        //check for new string being less than k
        while(j<=n && parseInt(str) <= k){ 
            //Append the next digit str and check str is less(or equal) or greater than k. 
            //if str>k break the loop 
            //repeat the same process for other digits on the left
            //for every char[j] append it to str, add dp[j+1] to dp[i]. 
            //Return dp[0]%(mod).
            dp[i]+=dp[j];
            dp[i]%= mod;
            if(j<n){
                str = str+char[j];
            }
            j++;
        }
    }
    return parseInt(dp[0]);
};