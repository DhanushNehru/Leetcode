/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
    let array = new Array(n);  //output array

        // creating adjacency list
        let a = new Array(n);
        for (let i = 0; i < n; i++) {
            a[i] = [];
        }
        for (let x of edges) {
            a[x[0]].push(x[1]);
            a[x[1]].push(x[0]);
        }

        dfs(-1, 0, a, labels,array);
        return array;
};

const dfs = (prev, curr, a, labels,array) => {
        const ans = new Array(26).fill(0);

        for (let x of a[curr]) {
            if (prev !== x) {
            // array return by the children node
                const res = dfs(curr, x, a, labels, array);  
            // combining the frequencies of left and right subtrees into one array
                for (let i = 0; i < 26; i++)  
                    ans[i] += res[i];
            }
        }
        // incrementing the freq of curr node label and storing in output array
        array[curr] = ++ans[labels.charCodeAt(curr) - 'a'.charCodeAt(0)];
        return ans;
}