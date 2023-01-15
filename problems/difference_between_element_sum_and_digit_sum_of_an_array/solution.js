/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;
    for(let i=0;i<nums.length;i++){
        elementSum+=nums[i];
        let numI = nums[i]
        while(numI!=0){
            digitSum += numI%10
            numI = Math.floor(numI/10)
        }
    }
    return Math.abs(elementSum - digitSum)
};