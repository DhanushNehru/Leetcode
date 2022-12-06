/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    let map = new Map()
    // we set values as -1 as if no conditions satisfy we need to return -1
    let digitSum = -1;
    let finalSum = -1;
    for(let i=0;i<nums.length;i++){
        let num = nums[i]
        let sumOfDigits = 0;
        while(num!=0){
            let digit = num % 10;
            num = Math.floor(num / 10)
            sumOfDigits = sumOfDigits+digit;
        }
        // if key value of sumOfDigits already exist we add and store it in digitSum
        let sumOfDigitsKey = map.get(sumOfDigits);
        if(sumOfDigitsKey!=undefined){
            digitSum = sumOfDigitsKey + nums[i]
            // To get pairs (i,j) for every iteration we check the greatest of 2 nums and store it in the sumOfDigits key
            map.set(sumOfDigits, Math.max(sumOfDigitsKey, nums[i]))
        }
        else{
            // we get sum of individual digits of each number and set it as key value
            map.set(sumOfDigits, nums[i])
        } 
        finalSum = digitSum > finalSum ? digitSum: finalSum;   
    }
    return finalSum;
};