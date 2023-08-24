/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = (words = [], maxWidth) => {
  let ans = [];  // This array will store the lines of justified text.
  let row = [];  // This array will hold words for the current line.
  let rowLetters = 0;  // Total character count of words in the current line.

  for (let word of words) {
    // Check if adding the current word to the current line would exceed the maxWidth.
    if (rowLetters + word.length + row.length > maxWidth) {
      // Distribute extra spaces to justify the line to the maxWidth.
      for (let i = 0; i < maxWidth - rowLetters; i++)
        row[i % (row.length - 1 || 1)] += " ";
      
      // Join the words in the current row and add to the result array.
      ans.push(row.join(""));
      
      // Reset the row and character count for the next line.
      row = [];
      rowLetters = 0;
    }
    
    // Add the current word to the current row and update character count.
    row.push(word);
    rowLetters += word.length;
  }
  
  // Join the words in the last row with a single space and pad to maxWidth.
  return ans.concat(row.join(" ").padEnd(maxWidth));
};
