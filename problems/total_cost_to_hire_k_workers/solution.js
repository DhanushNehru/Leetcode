/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    let ans=0, l=0, r=costs.length-1, max=1e5+1;
    const h1 = new MinPriorityQueue(), h2 = new MinPriorityQueue();
    h1.enqueue(max), h2.enqueue(max); // Insert (max possible elemets + 1) in both queue

    for(let i=0; i<k; ++i) {
        // Add elements until candidates size reached or both sides overlaps
        while(h1.size()<=candidates && l<=r) h1.enqueue(costs[l++]);
        while(h2.size()<=candidates && l<=r) h2.enqueue(costs[r--]);
        // Remove smallest element and add it to ans
        ans += (h1.front().element<=h2.front().element ? h1 : h2).dequeue().element;
    }

    return ans;
};