/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // g - greed factor array 
    g.sort((a,b) => a-b);
    // s - cookies
    s.sort((a,b) => a-b);
    let j = 0, result = 0;
    for (let num of s) {
        // Check if the current cookie size can satisfy the greed factor
        if (num >= g[j]) {
            // If satisfied, increment the count of content children
            result++ 
            // Move to the next greed factor as it's satisfied by the current cookie
            j++
        }
    }
    // Return the final count of content children
    return result;
};