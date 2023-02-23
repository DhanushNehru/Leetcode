/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    let maxheap = new MaxPriorityQueue({priority: v => v[0]});
    let minheap = new MinPriorityQueue({priority: v => v[1]});
    for(let i = 0; i < profits.length; i++){                  //step 1
        maxheap.enqueue([profits[i],capital[i]]);
    }
    while(k&&maxheap.size()){
        let [value,limit] = maxheap.dequeue().element;        //step 2
        if(limit<=w) k--, w+=value;    
        else minheap.enqueue([value,limit]);
        while(minheap.size()&&minheap.front().priority<=w){ //step 3
        let [value,limit] = minheap.dequeue().element;    
        maxheap.enqueue([value,limit]);    
    }}
    return w;
};