/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // we create two pointers to track the characters in s2
    let pointer1=0, pointer2=s1.length
    // split, sort & join is used to sort the strings to denote the permutation 
    // "abcd" & "dabc" should return true
    s1 = s1.split('').sort().join('')
    while(pointer1 < s2.length && pointer2 <= s2.length){ // <= to handle if two strings are of same length
        let substring = s2.slice(pointer1,pointer2)
        substring = substring.split('').sort().join('')
        if(s1===substring){
            return true
        }
        ++pointer1
        ++pointer2
    }
    return false;
};