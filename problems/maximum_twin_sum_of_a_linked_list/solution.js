/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    var st = []; 
    while(head != null){
        st.push(head.val);
        head = head.next;
    }
    let max = 0;
    for(let i=0; i<st.length; i++){
        // main logic for getting the twin sum is st[i] + st[st.length-1-i]
        max = Math.max(max, (st[i] + st[st.length-1-i]));
    }
    return max;
};