/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let i =0; 
    const arrayLength = arr.length;
    // we are checking the 'i' value incrementing 

    // going up the mountain
    while (i+1 < arrayLength && arr[i] < arr[i+1])
        i++;

    // peak can't be first or last
    if (i == 0 || i == arrayLength-1)
        return false;

    // going down the mountain
    while (i+1 < arrayLength && arr[i] > arr[i+1])
        i++;

    return i == arrayLength-1;
};