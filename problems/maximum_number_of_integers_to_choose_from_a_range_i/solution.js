/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    const nums = []
    for(let i=1;i<=n;i++){
        if(!banned.includes(i)){
            nums.push(i)
        }
    }
    let result = 0, sum=0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i]
        if(sum > maxSum){
            break
        }
        else{
            result++;
        }
    }
    return result
};