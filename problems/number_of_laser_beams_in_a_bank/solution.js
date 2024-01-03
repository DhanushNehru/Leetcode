/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    const noOfOnesArr = []
    let result =0;
    for(let i=0;i<bank.length;i++){
        const noOfOnes = (bank[i].match(/1/g) || []).length
        if(noOfOnes != 0){
            // non-zero occurrences of '1' contains the laser beams, other empty rows can be ignored
            noOfOnesArr.push(noOfOnes)
        }
    }

    for(let i=0; i<noOfOnesArr.length-1; i++){
        // laser beams between 2 seems to be the multiple of current count with the next count
        const mul = noOfOnesArr[i] * noOfOnesArr[i+1]
        result += mul
    }
    
    return result;
};