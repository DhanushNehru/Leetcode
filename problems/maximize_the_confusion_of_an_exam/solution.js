/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    // for there types of programs always use sliding window
    // Initialize variables
    let [left, right, numOfTrue, numOfFalse, max] = new Array(5).fill(0);

    // Function to check if there are more changes allowed for both true and false
    const moreChanges = () => numOfTrue > k && numOfFalse > k;

    // Iterate through the answerKey
    while (right < answerKey.length) {
        // Check the current answer and update the count of true or false
        if(answerKey[right] === 'T') numOfTrue++;
        if(answerKey[right] === 'F') numOfFalse++;

        // Reduce the number of changes by moving the left pointer
        while(moreChanges()) {
            // Check the answer at the left pointer and update the counts accordingly
            if(answerKey[left] === 'T') numOfTrue--;
            if(answerKey[left] === 'F') numOfFalse--;    
            left++;    
        }

        // Update the maximum consecutive sequence length
        max = Math.max(max, right - left + 1);

        // Move the right pointer to the next question
        right++;
    }

    // Return the maximum consecutive sequence length
    return max;

};