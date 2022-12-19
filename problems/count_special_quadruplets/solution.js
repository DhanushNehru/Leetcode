/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    const numsLength = nums.length;
    let count = 0;
    for(let i=0;i<numsLength;i++){
        for(let j=i+1;j<numsLength;j++){
            for(let k=j+1;k<numsLength;k++){
                for(let l=k+1;l<numsLength;l++){
                    if(nums[i]+nums[j]+nums[k] === nums[l]){
                        ++count;
                    }
                }
            }
        }
    }
    return count;
};