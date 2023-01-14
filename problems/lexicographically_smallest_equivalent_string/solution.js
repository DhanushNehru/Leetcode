/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const link = {}
    // Each group of characters represents a connected component.
    const findEquivalent = (a) => {
        if(link[a] == null) link[a] = a;
        while(link[a] !=a ){
            link[a] = link[link[a]];
            a = link[a];
        }
        return a;
    }
    const union = (a,b) =>{
        a = findEquivalent(a)
        b = findEquivalent(b)
        // choose the lexicographically smallest member of each set to be the set's representative.
        if(a>b){
            let temp = b;
            b = a;
            a = temp;
        }
        link[b] = a
    }

    // use Union & findEquivalent to group the characters 
    for(let i = 0; i < s1.length; i++){
        union(s1[i], s2[i]);
    }

    let ans = "";
    for(const a of baseStr){
        ans+=findEquivalent(a);
    }
    return ans;
};