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
    console.log("Head ", head)
    console.log("Typeof Head ", typeof(head))
    let slowPointer = head;
    let fastPointer = head;
    if(head != null){
        while(fastPointer != null && fastPointer.next != null){
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }
    }
    console.log("Final slow pointer ",slowPointer);
    return slowPointer;
};