/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // we are taking first string and comparing it with the rest of the strings in the array
    const strsFirst = strs[0]
    let result = ""
    for(let i=0;i<strsFirst.length;i++){
        let isMatch = false;
        for(let j=0;j<strs.length;j++){
            if(strsFirst[i] == strs[j][i]){
                isMatch = true;
            }
            else{
                isMatch = false;
                break;
            }
        }
        if(isMatch==true){
            result+=strsFirst[i]    
        }
        else{
            break;
        }
    }
    return result;
};