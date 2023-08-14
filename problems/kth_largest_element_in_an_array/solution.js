/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // Create a new Min Priority Queue to store the k largest elements.
    let pq = new MinPriorityQueue();
    
    // Iterate through each element 'x' in the 'nums' array.
    for (let x of nums) {
        // Enqueue the current element 'x' into the priority queue.
        pq.enqueue(x);
        
        // If the size of the priority queue becomes larger than 'k', remove the smallest element.
        if (pq.size() > k) {
            pq.dequeue();
        }
    }
    
    // Return the element at the front of the priority queue, which is the kth largest element.
    return pq.front().element;
};