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
var middleNode = function(head) {
    let slowPointer = head, fastPointer = head;
    if(head !=null){
        while(fastPointer != null && fastPointer.next !=null){
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }
    }
    return slowPointer;
};
