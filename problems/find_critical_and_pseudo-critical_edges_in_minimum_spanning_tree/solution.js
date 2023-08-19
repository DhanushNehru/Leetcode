/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */

class UnionFind {
    constructor(n) {
        this.parents = [];
        for(let i = 0; i < n; i++) {
            this.parents.push(i);
        }
        this.count = n;
    }

    find(index) {
        const parent = this.parents[index];
        if(parent === index) return index;

        let root = this.find(parent);
        this.parents[index] = root;
        return root;
    }

    union(index1, index2) {
        let p1 = this.find(index1);
        let p2 = this.find(index2);

        if(p1 !== p2) {
            this.count--;
            this.parents[p1] = p2;
            return true;
        }

        return false;
    }
}

var findCriticalAndPseudoCriticalEdges = function(n, edges) {
    let criticalEdges = [], psuedoCriticalEdges = [], map = new Map();
    
    edges.forEach((edge, i) => map.set(edge, i));
    
    edges.sort((a, b) => a[2] - b[2]);
    
    const buildMST = (pick, skip) => {
        let uf = new UnionFind(n), cost = 0;
        
        if(pick !== null) {
            uf.union(pick[0], pick[1]);
            cost += pick[2];
        }
        
        for(let edge of edges) {
            if(edge !== skip && uf.union(edge[0], edge[1])) {
                cost += edge[2];
            }
        }
        
        return uf.count === 1 ? cost : Number.MAX_SAFE_INTEGER;
    };
    
    const minCost = buildMST(null, null);
    
    for(let edge of edges) {
        const index = map.get(edge);
        const costWithout = buildMST(null, edge);
        if(costWithout > minCost) {
            criticalEdges.push(index);
        } else {
            const costWith = buildMST(edge, null);
            if(costWith === minCost) psuedoCriticalEdges.push(index);
        }
    }
    
    return [criticalEdges, psuedoCriticalEdges];    
};