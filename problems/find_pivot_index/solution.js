/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const arr1 = nums.slice(0,2)
    const arr2 = nums.slice(3)
    let result = -1;
    for(let i=nums.length-1;i>=0;i--){
        const arr1 = nums.slice(0,i)
        const arr2 = nums.slice(i+1)
        const arr1Sum = arr1.reduce((a,b)=>a+b, 0)
        const arr2Sum = arr2.reduce((a,b)=>a+b, 0)
        if(arr1Sum===arr2Sum){
            result = i; 
        }
    }
    return result;
};