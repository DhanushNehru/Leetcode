/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let count = 0;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            for(let k=1;k<=n;k++){
                // Math.pow(x,2) is x**2
                if((i**2)+(j**2) === (k**2)){
                    ++count;
                }
            }
        }
    }
    return count;
};