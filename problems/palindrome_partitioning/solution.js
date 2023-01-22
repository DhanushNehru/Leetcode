/**
 * @param {string} s
 * @return {string[][]}
 */

const isPalindrome = (str) => {
    // if(str === str.split("").reverse().join("")){
    //     return true
    // }
    //return false;
    // Better way to check if a str is palidrome

    const middle = Math.ceil(str.length/2)
    for(i=0;i<=middle;i++){
        if(str[i] !== str[str.length-1-i]){
            return false
        }
    }
    return true;
}

var partition = function(str) {
    const result = []

    // first we check whether the entire string is palindrome or not
    if (isPalindrome(str)) {
        result.push([str]);
    }

    const backtracking = (s, prevPalindromes=[]) => {

        for(let i=1;i<s.length;i++){
            const leftSubstr = s.substring(0,i)
            const rightSubstr = s.substring(i,s.length)

            const isLeftPalindrome = isPalindrome(leftSubstr);
            const isRightPalindrome = isPalindrome(rightSubstr);

            // the prevPalidromes will hold the sub result 
            if (isRightPalindrome && isLeftPalindrome) {
                result.push([leftSubstr, rightSubstr, ...prevPalindromes]);
            }

            if(isRightPalindrome){
                backtracking(leftSubstr, [rightSubstr, ...prevPalindromes] );   
            }
    
        }
    }
    backtracking(str)

    return result;
};

