/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let max = 0;
    for(let iteration=1;iteration<s.length;iteration++){
        const str1 = s.slice(0,iteration)
        const str2 = s.slice(iteration,s.length)

        let i = 0, zeroCount = 0, oneCount = 0;
        
        while(i<str1.length){
            if(str1[i]=="0"){
               ++zeroCount;
            }
            ++i;
        }

        i=0;
        
        while(i<str2.length){
            if(str2[i]=="1"){
                ++oneCount;
            }
            ++i
        }

        const sum = zeroCount + oneCount;
        max = sum > max ? sum : max
        
    }
    return max;
};