/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const insertAt = (array, index ,element ) => {
    array.splice(index, 0, element)
}

var duplicateZeros = function(arr) {
    const arrayLength = arr.length;
    for(let i = 0; i<arrayLength; i++){
        if(arr[i]==0){
            insertAt(arr, i, 0)
            ++i;
        }
    }
    arr.length = arrayLength;
};