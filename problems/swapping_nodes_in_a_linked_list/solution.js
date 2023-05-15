/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    // distance from beginning to k'th node == distance from k'th node to end
    let A = head, B = head, K, temp
    // distance from beginning to k'th node
    for (let i = 1; i < k; i++){
        A = A.next
    } 
    K = A, A = A.next
    // distance from k'th node to end
    while (A) {
        A = A.next 
        B = B.next
    }
    temp = K.val, K.val = B.val, B.val = temp
    return head
};