/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result = [], length = s.length
    // 1. Need to have 4 parts
    // 2. Each of the parts need to be between 0 and 255, inclusive.
    for(let i=1;i<=3;i++){
        for(let j=1;j<=3;j++){
            for(let k=1;k<=3;k++){
            // for l we need not run another loop, we can get the value from the below
                let l = length - (i+j+k)
                if(i+j+k+l == length){
                const num1 = parseInt(s.substring(0,i))
                const num2 = parseInt(s.substring(i,i+j))
                const num3 = parseInt(s.substring(i+j,i+j+k))
                const num4 = parseInt(s.substring(i+j+k))

                // When we parseInt the return type can contain NaN so we need to check if the number is integer or not
                if(Number.isInteger(num1) && num1<=255 && Number.isInteger(num2) && num2<=255 && Number.isInteger(num3) && num3<=255 && Number.isInteger(num4) && num4<=255){
                    const ip = `${num1}.${num2}.${num3}.${num4}`
                    // -3 because there are 3 dots in the ip
                    if(ip.length - 3 === length){
                        result.push(`${num1}.${num2}.${num3}.${num4}`)
                    }
                }
                }
            }
        }
    }
    return result;
};