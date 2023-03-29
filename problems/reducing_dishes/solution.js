/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    // Sort the satisfactions array in descending order, 
    // so that we process the highest satisfaction dishes first.
    satisfaction.sort((a, b) => b - a);

    let max = 0;
    let sum = 0;

    for(const val of satisfaction){
        sum+=val
        
        if (sum <= 0) {
            // If the 'sum' variable becomes negative or zero, 
            // it means that the current dish and all the previous dishes 
            // cannot contribute to a positive satisfaction score, 
            // so we break out of the loop.
            break;
        }
        else{
            // If the 'sum' variable is positive, it means that 
            // the current dish and the previous dishes can contribute 
            // to a positive satisfaction score, so we update 'max' by 
            // adding the current value of 'sum' to it.
            max += sum;
        }
    }
    return max;
};