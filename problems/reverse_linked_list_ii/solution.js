/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    // Check for edge cases: if the linked list is empty or if left equals right, return the original list.
    if (!head || left === right) return head;

    // Create a dummy node to simplify the reversal process.
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    // Move 'prev' to the node just before the left position.
    for (let i = 0; i < left - 1; ++i) {
        prev = prev.next;
    }

    // Initialize 'current' to the node at the 'left' position.
    let current = prev.next;

    // Reverse the sublist from 'left' to 'right'.
    for (let i = 0; i < right - left; ++i) {
        const nextNode = current.next;
        current.next = nextNode.next;
        nextNode.next = prev.next;
        prev.next = nextNode;
    }

    // 'dummy.next' still points to the head of the modified list.
    return dummy.next;
};
