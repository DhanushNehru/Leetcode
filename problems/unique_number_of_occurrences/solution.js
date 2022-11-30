/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // lets create an object which behaves as a hash
    let hashObject = new Object();
    for(let i=0; i< arr.length;i++){
        // we check whether the object key contains the value and increment the occurrence count
        if(hashObject[arr[i]]!=undefined){
            hashObject[arr[i]] = ++hashObject[arr[i]]
        }
        else{
            hashObject[arr[i]] = 1
        }
    }
    const occurrencesArray = Object.values(hashObject)
    return occurrencesArray.length == [...new Set(occurrencesArray)].length ? true: false;
};