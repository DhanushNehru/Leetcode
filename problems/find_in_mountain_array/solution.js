/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */

const orderAgnosticBinarySearch = function( arr, target, start,end ){
    // array can be either ascending or descending 
    const isAsc = arr.get(start) < arr.get(end)
    
    while(start<=end){
        let mid = start + Math.floor((end-start)/2)

        if(arr.get(mid)== target){
            return mid;
        }

        if(isAsc){
            if(target < arr.get(mid)){
                end = mid - 1
            }
            else{
                start = mid+1
            }
        }
        else{
            if( target > arr.get(mid)){
                end = mid - 1
            }
            else{
                start = mid + 1
            }
        }
    }
    return -1; 

}

const peakIndexInMountainArray = function(arr) {
     // Same code from problem: peak index in mountain array 
    let start=0, end= arr.length() - 1;
    while(start<end){
        let mid = start + Math.floor((end-start)/2)
        if(arr.get(mid)> arr.get(mid+1)){
            // in slope down of array
            end = mid
        }
        else{
            start = mid + 1; 
        }
    }
    return start; // you can also return 'end'
};

var findInMountainArray = function(target, mountainArr) {
    const peak = peakIndexInMountainArray(mountainArr);
    // first we search on the left side of mountain array
    const leftSearch = orderAgnosticBinarySearch( mountainArr, target, 0, peak)
    if(leftSearch != -1){
        return leftSearch
    }
    // else we search on right side of mountain array
    return orderAgnosticBinarySearch( mountainArr, target, peak+1, mountainArr.length()-1)
};