/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    // Create two new ListNode instances to store values before and after the threshold.
    let before = new ListNode(0); // Initialize a 'before' list to store nodes with values less than 'x'.
    let after = new ListNode(0);  // Initialize an 'after' list to store nodes with values greater than or equal to 'x'.

    // Initialize pointers to the current nodes in the 'before' and 'after' lists.
    let before_curr = before; // A pointer to the last node in the 'before' list.
    let after_curr = after;   // A pointer to the last node in the 'after' list.

    // Iterate through the given linked list represented by 'head'.
    while (head !== null) {
        // Check if the current node's value is less than the threshold 'x'.
        if (head.val < x) {
            // Add the current node to the 'before' list.
            before_curr.next = head;
            before_curr = before_curr.next; // Move the 'before_curr' pointer to the newly added node.
        } else {
            // Add the current node to the 'after' list.
            after_curr.next = head;
            after_curr = after_curr.next; // Move the 'after_curr' pointer to the newly added node.
        }
        // Move to the next node in the original list.
        head = head.next;
    }

    // Set the 'next' pointers of the last nodes in both 'before' and 'after' lists to null,
    // effectively cutting off any remaining nodes from the original list.
    after_curr.next = null;
    before_curr.next = after.next; // Link the end of 'before' list to the beginning of 'after' list.

    // Return the modified 'before' list, which now contains nodes rearranged based on the threshold.
    return before.next;    
};