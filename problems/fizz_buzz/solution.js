/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr = [];
    if(n >= 1){
        arr[0]="1"
    }
    if(n >= 2){
        arr[1]="2"
    }
    for(let i=2; i<n; i++){
        let value = i+1;
        arr[i]=''
        if(value%3 == 0){
            arr[i] = "Fizz"
        }
        if(value%5 == 0){
            arr[i] = arr[i]+ "Buzz"
        }
        if(!(value%3 == 0 || value%5 == 0)){
            arr[i]=value+''
        }
    }
    return arr;
};