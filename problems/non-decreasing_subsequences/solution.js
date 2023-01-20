/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let length = nums.length, result = [];
    
    const backtracking = (i, subsequence) =>{
        let unique = new Set()
        for(let j=i;j<length;j++){
            if(unique.has(nums[j]) || subsequence.length > 0 && subsequence[subsequence.length - 1] > nums[j]){
                continue;
            }
        
            unique.add(nums[j])
            subsequence.push(nums[j])
             
            if (subsequence.length >= 2) {
                result.push([...subsequence])
            }
       
            backtracking(j+1, subsequence)
            subsequence.pop()
            
        }
    }
    backtracking(0, [])
    return result;
};