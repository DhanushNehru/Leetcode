/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    // Initialize an empty object to store character frequencies
    let hash = {};
    
    for (let c of s)
        // Increment the frequency count of the current character in the hash object,
        // or initialize it to 1 if it doesn't exist
        hash[c] = hash[c] + 1 || 1;

    // Get an array of unique characters from the hash object and sort them
    // based on decreasing frequency using a custom sorting function
    let sort = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);
    
    // Initialize an empty array to store the result string
    let res = [];
    
    // Initialize an index to keep track of the position in the result array
    let index = 0;

    // Iterate through the sorted characters
    for (let i = 0; i < sort.length; i++) {
        // Get the frequency of the current character
        let occur = hash[sort[i]];
        
        // If the frequency of the current character is greater than half the string length rounded up,
        // it's not possible to reorganize the string with non-adjacent occurrences of this character
        if (occur > parseInt((s.length + 1) / 2))
            return ""; // Return an empty string to indicate failure
        
        // Place the occurrences of the current character in the result array
        for (let j = 0; j < occur; j++) {
            // If the current index exceeds the length of the result array, wrap around to index 1
            if (index >= s.length)
                index = 1;
            
            // Place the current character at the computed index in the result array
            res[index] = sort[i];
            
            // Move the index by 2 to ensure non-adjacent placement
            index += 2;
        }
    } 
    
    // Join the characters in the result array to form the final reorganized string
    return res.join('');
};