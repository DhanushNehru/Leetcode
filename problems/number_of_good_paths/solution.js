/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function(vals, edges) {
   edges.sort((a, b)=>{
        a = Math.max(...a.map(i => vals[i]));
        b = Math.max(...b.map(i => vals[i]));
        return a-b;
    });
    const link = [...Array(vals.length).keys()]
    const rank = [...Array(vals.length).keys()].map(()=>1);
    const count = [...Array(vals.length).keys()].map((i)=>[vals[i], 1]);
    const find = (a)=>{
        while(a != link[a]){
            link[a] = link[link[a]];
            a = link[a];
        }
        return a;
    };
    const union = (a, b)=>{
        a = find(a);
        b = find(b);
        if(a == b) return;
        if(rank[a] < rank[b]) [a, b] = [b, a];
        rank[a]+=rank[b];
        link[b]=a;
        const [a_max_val, a_count] = count[a];
        const [b_max_val, b_count] = count[b];
        if(a_max_val == b_max_val){
            count[a] = [a_max_val, a_count + b_count];
        }else if(a_max_val > b_max_val){
            count[a] = [a_max_val, a_count];
        }else{
            count[a] = [b_max_val, b_count];
        }
    }

    const getPathsFromJoining =  (a, b)=>{
        a = find(a);
        b = find(b);
        if(a == b) return 0;
        const [a_max_val, a_count] = count[a];
        const [b_max_val, b_count] = count[b];
        if(a_max_val == b_max_val){
            return a_count*b_count;
        }
        return 0;
    }
    let ans = 0;
    for(let [a, b] of edges){
        ans+= getPathsFromJoining(a, b);
        union(a, b);
    }
    return ans + vals.length;
};