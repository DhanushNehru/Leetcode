/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const res = []
    while(matrix.length){
        // First row
        const first = matrix.shift()
        res.push(...first)
        
        for(const m of matrix){
            let val = m.pop()
            if(val){
                res.push(val)
            }
            m.reverse()   
        }   
        matrix.reverse()
    }
    return res
};