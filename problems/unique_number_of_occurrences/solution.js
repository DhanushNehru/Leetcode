/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const hash = {}, set = new Set()

    for(let i=0;i<arr.length;i++){
        hash[arr[i]] = hash[arr[i]] ? hash[arr[i]]+1 : 1
    }

    for(prop in hash){
        // Check if the count of occurrences is not already in the set
        if(!set.has(hash[prop])){
            // Add the count of occurrences to the set
            set.add(hash[prop])
        }
        else{
             // If the count of occurrences is already in the set, the occurrences are not unique
            return false
        }
    }
    // If the loop completes, all counts of occurrences are unique
    return true
};