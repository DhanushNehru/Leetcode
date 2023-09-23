/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    // Create an empty object to store the maximum chain length for each word
    let memory = {}; 

    // Sort the input array 'words' by word length in ascending order
    words.sort((a, b) => a.length - b.length);

    // Iterate through each word in the sorted 'words' array
    for (var word of words) {
        var longest = 0; // Initialize the maximum chain length for the current word
        
        // Iterate through each character position in the current word
        for (var i = 0; i < word.length; i++) {
            // Remove the i-th character from the current word, creating a new word 'pre'
            var pre = word.slice(0, i) + word.slice(i + 1);
            
            // Calculate the maximum chain length for the current word by considering
            // the chain length of the 'pre' word plus 1 (if 'pre' exists in the memory)
            longest = Math.max(longest, (memory[pre] || 0) + 1);
        }

        // Store the calculated maximum chain length for the current word in 'memory'
        memory[word] = longest;
    }

    // Find and return the maximum chain length among all words in 'memory'
    return Math.max(...Object.values(memory));
};
