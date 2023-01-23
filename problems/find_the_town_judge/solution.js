/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    // If only the judge exists return the judge
    if (!trust.length && n === 1) return n

    let maxTrustFrequency;
    const trustFrequency = new Map()
    for(const [truster, trustee] of trust){
        if(trustFrequency.has(trustee)){
            trustFrequency.set(trustee, trustFrequency.get(trustee)+1)
        }
        else{
            trustFrequency.set(trustee, 1)
        }
        // find the maximum trust value
        maxTrustFrequency = maxTrustFrequency == undefined ? 
            trustFrequency.get(trustee) : Math.max(maxTrustFrequency, trustFrequency.get(trustee))
    }
    // trust 
    // [ [ 1, 3 ], [ 2, 3 ] ]
    // trustMap  
    // { 1 => 3, 2 => 3 }
    const trustMap = new Map(trust)
    
    // if everybody except the town judge trusts the town judge then maxTrustFrequency === n - 1
    if(maxTrustFrequency === n - 1){
        for (let i = 1; i <= n; i++) {
            // !trustMap.has condition checks whether the town judge trusts nobody
            if (!trustMap.has(i)) return i
        }
    }
    // if the town judge does not exist and cannot be identified then return -1
    return -1;
};