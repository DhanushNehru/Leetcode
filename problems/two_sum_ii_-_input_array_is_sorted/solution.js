/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let leftPointer = 0, rightPointer = numbers.length - 1;
    while(leftPointer < rightPointer){
        let sum = numbers[leftPointer]+numbers[rightPointer] 
        if(sum > target){
            --rightPointer
        }
        else if(sum < target){
            ++leftPointer
        }
        else{
            return [leftPointer+1, rightPointer+1]
        }
    }
};