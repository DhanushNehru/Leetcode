/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    let pointerForLength = head;
    let pointer = head;
    let count = 1;
    let nodeLength = 0;
    
    if(head.next == null)
        return null
    
    while(pointerForLength!=null){
        ++nodeLength;
        pointerForLength = pointerForLength.next;
    }
    
    console.log(" Node Length ", nodeLength)
    const nFromEnd = nodeLength - n ;
    console.log(" Initial Pointer ", pointer)
    
    if(nFromEnd == 0){
        pointer = pointer.next
        return pointer;
    }
    console.log(" N From End ", nFromEnd)
    
    while(count < nFromEnd && pointer !=null ){
        ++count;
        console.log(" Count ", count)
        pointer = pointer.next;
        console.log(" Pointer ", pointer)
    }
    
    if(pointer!=null && pointer.next!=null){
        pointer.next = pointer.next.next;     
    }
    console.log(" Final Pointer ", pointer)
    console.log(" Head ",head)
    return head;
};