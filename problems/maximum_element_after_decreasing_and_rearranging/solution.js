/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a,b) => a - b);

    // The value of the first element in arr must be 1
    arr[0] = 1;

    // The absolute difference between any 2 adjacent elements must be less than or equal to 1
    for(let i=1; i<arr.length; i++){
        // operations performed if abs(arr[i] - arr[i - 1]) is not equal to 1
        if(!(arr[i] - arr[i-1] <= 1)){
            arr[i] = arr[i-1] + 1;
        }
    }

    // maximum possible value of an element will be in the last
    return arr.pop()
};