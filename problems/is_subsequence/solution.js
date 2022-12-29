/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
   //! if len of s > len of t, return false because s cant be a subsequence of t
   if (s.length > t.length) return false; 
   
   let subsequenceCount = 0;
   for (let i = 0; i < t.length; i++) {
        if (s[subsequenceCount] === t[i]) {
        // if it is matches then increment subsequence
        subsequenceCount++;
    }
   }
   // if subsequence count matches the s length we return true
   return subsequenceCount === s.length   
};