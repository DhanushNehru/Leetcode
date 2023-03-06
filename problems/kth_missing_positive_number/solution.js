/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let i=1, index = 1;
    while(i<=(arr[arr.length - 1]+ k)){
        if(!arr.includes(i)){
            if(index == k){
                return i 
            }
            ++index
        }
        ++i
    }
};