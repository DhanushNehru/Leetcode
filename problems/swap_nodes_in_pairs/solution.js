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
var swapPairs = function(head) {
    if(!head || !head.next){
        return head
    }
    let val1 = head, val2 = head.next, val3 = val2.next;
    val2.next = val1
    val1.next = swapPairs(val3)
    return val2
};