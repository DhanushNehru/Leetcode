/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map(), resultArray = [], resultArrayIndex = 0
    for(let i=0;i<strs.length;i++){
        // to check anagram logic we sort each string
        let sortedStr = [...strs[i]].sort().join('')
        // we map elements if it contains
        if(map.has(sortedStr)){
            resultArrayIndex = map.get(sortedStr) 
            // we push the elements to the nested array (occurs everytime when the anagram is already found)
            resultArray[resultArrayIndex].push(strs[i])
        }
        else{
            // if an element is not found in the hash map then the resultant array index will be its length
            resultArrayIndex = resultArray.length
            // it is a nested array so if value is not present initially we set an empty array []
            resultArray[resultArrayIndex] = resultArray[resultArrayIndex] == undefined ? []: resultArray[resultArrayIndex]
            // we push the elements to the nested empty array (occurs once for each new anagram string ) 
            resultArray[resultArrayIndex].push(strs[i])
            map.set(sortedStr, resultArrayIndex)
        }
    }
    return resultArray;  
};