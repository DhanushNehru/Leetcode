/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function (s, k) {
    let cache = {}, incr, result;

    const count = (i, k, prev, prevCount) => {
        // Check if the result for the current state is already cached.
        if (cache[`${i},${k},${prev},${prevCount}`] != undefined) {
            return cache[`${i},${k},${prev},${prevCount}`];
        }

        // Base case: no more deletions allowed, return infinity.
        if (k < 0) {
            return Number.MAX_SAFE_INTEGER;
        }
        
        // Base case: end of the string, return 0.
        // Changing (i === s.length) to (k === s.length - i) improved runtime dramatically
        if (k === s.length - i) {
            return 0;
        } 
        
        // Compare current character with the previous one.
        if (s[i] == prev) {
            // If consecutive occurrences meet certain conditions, increase the count.
            if ([1, 9, 99].includes(prevCount)) {
                incr = 1;
            } else {
                incr = 0;
            }
            // Recur with the same character, updating the count.
            result = incr + count(i + 1, k, prev, prevCount + 1);
        } else {
            // Two options: delete the current character or keep it.
            result = Math.min(
                count(i + 1, k - 1, prev, prevCount), // delete s[i]
                1 + count(i + 1, k, s[i], 1) // don't delete
            );
        }
        
        // Cache the result for the current state and return it.
        cache[`${i},${k},${prev},${prevCount}`] = result;
        return result;
    };

    // Start the recursive calculation from the beginning of the string.
    return count(0, k, "", 0);
};