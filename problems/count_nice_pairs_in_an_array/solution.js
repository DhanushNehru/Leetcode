/**
 * @param {number[]} nums
 * @return {number}
 */

var countNicePairs = function(nums) {
    const mod = Math.pow(10,9) + 7

    // Function to reverse the digits of a number
    const reverseNumber = (num) => {
        return +(`${num}`.split("").reverse().join(""))
    }
    
    const differenceCount = {}
    // nums[i] -  rev(nums[i])  == nums[j] - rev(nums[j])
    for(let i=0; i<nums.length; i++){
        const reverseNum =  reverseNumber(nums[i])
        const difference = nums[i] - reverseNum
        // Update the count of occurrences for the calculated difference
        differenceCount[difference] = differenceCount[difference] == undefined ? 1 : differenceCount[difference] + 1;
    }

    let nicePairsCount = 0;
    // Count nice pairs based on the occurrences
    for (const key in differenceCount) {
        // If there are more than one occurrence of a difference, calculate the number of nice pairs using combination formula
        const count = differenceCount[key];
        if (count > 1) {
            // Combination formula: nC2 = n! / (2! * (n-2)!)
            nicePairsCount = (nicePairsCount + (count * (count - 1) / 2)) % mod;
        }
    }

    return nicePairsCount;
};