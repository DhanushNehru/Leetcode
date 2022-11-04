/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let m = accounts.length;
    let sum = 0;
    let result = 0;
    for(let i=0;i<m;i++){
        let n = accounts[i].length;
        for(let j=0;j<n;j++){
            sum = sum + accounts[i][j];
        }
        if(sum>result){
            result = sum;
        }
        sum=0;
    }
    return result;
};