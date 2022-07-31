/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    if(!s){
        return 0;
    }
    const uniqueChar = new Set();
    let start=0, end=0, maxLength=0;
    while(end<s.length){
        if(!uniqueChar.has(s[end])){
            uniqueChar.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueChar.size)
        }
        else{
            uniqueChar.delete(s[start]);
            start++;
        }
    }
    return maxLength;
};

/** The below solution does not satisfy example 3
var lengthOfLongestSubstring = function(s) {
    let flag = 0;
    let finalString = "";
    const stringLength = s.length;
    for(let i=0;i<stringLength;i++){
        for(let j=i;j<stringLength;j++){
            if(i!=j && s[i]==s[j]){
                ++flag;
                break;
            }
        }
        if(flag==0){
            finalString += s.charAt(i)
            console.log(" Final String ", finalString)
        }
        flag = 0;
    }
    return finalString.length;
};
 */