/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    // Define the modulo value to avoid integer overflow
    const mod = 1e9 + 7;

    // Initialize variables to keep track of the counts of vowels 'a', 'e', 'i', 'o', and 'u'
    // The initial counts are all set to 1
    let a = 1, e = 1, i = 1, o = 1, u = 1;

    // Loop from 1 to (n - 1) to calculate the counts for each vowel based on the rules
    for (let j = 1; j < n; j++) {
        // Calculate the counts for the next iteration
        let a_next = e;
        let e_next = (a + i) % mod;
        let i_next = (a + e + o + u) % mod;
        let o_next = (i + u) % mod;
        let u_next = a;
        
        // Update the counts for the current iteration with the calculated values
        a = a_next, e = e_next, i = i_next, o = o_next, u = u_next;
    }

    // Calculate the sum of counts for all vowels and take modulo to ensure it doesn't overflow
    return (a + e + i + o + u) % mod;
};
