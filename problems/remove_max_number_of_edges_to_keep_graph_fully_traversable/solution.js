/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
    const edges3 = edges.filter(e => e[0] == 3);
    const edges2 = edges.filter(e => e[0] == 2);
    const edges1 = edges.filter(e => e[0] == 1);
    const parents = [[], []];
    for(let i = 0; i < n+1; i++) {
        parents[0][i] = i;
    }
    const findParent = function(c, l) {
        if(c != parents[l][c]) {
            parents[l][c] = findParent(parents[l][c], l);
        }
        return parents[l][c];
    }
    const build = function(p, q, l) {
        if(p < q) {
            parents[l][q] = p;
        } else {
            parents[l][p] = q;
        }
    }
    
    let count = 0;
    let components = n;
    let i = 0;
    while(i < edges3.length) {
        const [_, a,b] = edges3[i];
        const p = findParent(a, 0);
        const q = findParent(b, 0); 
        if(p!=q) {
            build(p, q, 0);
            components--;
            count++;
        }        
        i++;
    }
    parents[1]=[...parents[0]];
    let [componentsA, componentsB] = [components, components];

    i = 0;
    while(i < edges2.length) {
        const [_, a,b] = edges2[i];
        const p = findParent(a, 1);
        const q = findParent(b, 1);  
        if(p!=q) {
            build(p,q, 1);
            componentsB--;
            count++;
        }        
        i++;
    }

    i = 0;
    while(i < edges1.length) {
        const [_, a,b] = edges1[i];
        const p = findParent(a, 0);
        const q = findParent(b, 0);  
        if(p!=q) {
            build(p,q, 0);
            componentsA--;
            count++;
        }        
        i++;
    }

    if(componentsA!=1 || componentsB !=1) {
        return -1;
    }

    return edges.length - count;
};