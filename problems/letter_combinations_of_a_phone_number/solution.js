/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length == 0){
        return []
    }

    const phoneNumber = {
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    }, result = []

    const backtrack = (i , str) => {

        if (i === digits.length) {
            result.push(str);
            return;
        }

        for (const c of phoneNumber[digits[i]]) {
            backtrack(i + 1, str + c);
        }

    }

    backtrack(0, "")

    return result
};