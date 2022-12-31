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
var deleteDuplicates = function(head) {
    let start = head
    while( start!=null ){
        if(start.next!==null && start.val == start.next.val){
            // we modify only the next address it points to skipping the duplicate value
            start.next = start.next.next
        }
        else{
            start = start.next
        }
    }
    return head;
};