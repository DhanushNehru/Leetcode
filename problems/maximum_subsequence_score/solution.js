/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    let result = 0;
    let totalSum = 0;
    let heap = new MinPriorityQueue({priority: (element) => element})

    const merged = nums1.map((nums1Val, i) => [nums2[i], nums1Val])
    merged.sort((a,b) => b[0] - a[0])

    for (const [maxOf2, num1Val] of merged){
        if(heap.size() === k){
            totalSum -= heap.dequeue().element
        }

        totalSum += num1Val
        heap.enqueue(num1Val)

        if(heap.size() === k){
            result = Math.max(result, totalSum * maxOf2)
        }

    }

    return result
};