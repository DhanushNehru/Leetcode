/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const regex =  RegExp(`.{1,${k}}`, 'g')
    const stringArray = s.match(regex)
    
    let index = 0;
    let result = ""
    while(stringArray.length>index){
        if(index%2==0){
            result += stringArray[index].split('').reverse().join('')
        }
        else{
            result+= stringArray[index]
        }
        ++index
    }
    return result
};