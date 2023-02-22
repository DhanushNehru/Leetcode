/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
let shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((a,b) => a + b);
    while (left < right){
        let mid = Math.floor((left + right) / 2);
        let needed = 1;
        let current = 0;
        for(let i = 0; i < weights.length; i++){
            if(current + weights[i] > mid){
                needed ++;
                current = weights[i];
            }
            else current += weights[i];
        }
        if(needed > days) left = mid + 1;
        else right = mid;
    }
    return left;
};