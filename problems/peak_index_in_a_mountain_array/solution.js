/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    // if element at middle > element at middle + 1 - mountain slope down
    // ( answer will be - element at middle )
    // if element at middle < element at middle + 1 - mountain slope up
    // ( answer will be from middle to end )
    // In the end start & end will point to the same number then that is the largest number

    let start=0, end= arr.length - 1;
    while(start<end){
        let mid = start + Math.floor((end-start)/2)
        if(arr[mid]> arr[mid+1]){
            // in slope down of array
            end = mid
        }
        else{
            start = mid + 1; 
        }
    }
    return start; // you can also return 'end'
};