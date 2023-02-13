/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    num = `${num}`
    for(let i=0;i<num.length;i++){
        if(num[i]!=9){
            num = num.replace(num[i], '9')
            break;
        }
    }
    return num
};