/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fastPointer = head, slowPointer = head
    while(fastPointer && fastPointer.next){
        fastPointer = fastPointer.next.next
        slowPointer = slowPointer.next
        if(fastPointer == slowPointer){
            return true
        }
    }
    return false
};