/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let hash = []
    while(n!=1){
        let sum = 0;
        while(n!=0){
            const digit=n%10;
            n = Math.floor(n/10)
            sum+=digit*digit;
        }
        n = sum
        if(hash[n]){
            return sum == 1 ? true: false
        }
        else{
            hash[n] = sum;
        }
    }
    return n==1 ? true: false;
};