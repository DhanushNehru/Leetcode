/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    // first node is odd & second node is even and goes on
    if(head == null){
        return head
    }
    let odd = head, even = head.next, evenHead = even;
    while(even && even.next){
        // Eg) [1,2,3,4,5]
        // odd >> [1,2,3,4,5]
        // odd.next >> [2,3,4,5]
        // odd.next.next >> [3,4,5]
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};