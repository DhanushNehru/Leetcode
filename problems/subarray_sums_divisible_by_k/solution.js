/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    // Concept of prefix sum
    // arr = [1,2,3,4,5]
    // prefixSum = [1,3,6,10,15] , index3 - index1 => 10 - 3 => 7 ( gives the sum of sub array - 3,4 )
    let result = 0, prefixRemainder = 0, map = {};
    // if the remainder is 0 we keep the count as 1
    // Eg) [ -2, -3 ] & k = 5 => output is -5 ( remainder is 0, but as per count we need it to be 1 )
    map[0] = 1
    for(num of nums) {
        // we add +k to eliminate negative values
        prefixRemainder = (prefixRemainder + num % k + k) % k
        // In this problem we get the prefix remainder
        // In each iteration the prefix remainder values for
        // [4,5,0,-2,-3,1] will be 
        // [4 , 4 , 4 , 2 , 4 , 0] where k = 5
        if(map[prefixRemainder] == undefined){
            map[prefixRemainder] = 0
        }
        result += map[prefixRemainder]
        map[prefixRemainder]++
    }
    return result;
};