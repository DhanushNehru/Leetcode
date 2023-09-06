/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
    const res = new Array(k).fill(null); // Initialize an array to store split linked lists, initially filled with null values
    let n = 0; // Initialize a variable to count the total number of nodes in the linked list

    let curr = root; // Initialize a pointer 'curr' to traverse the linked list starting from the 'root'

    // Count the total number of nodes in the linked list
    while (curr != null) {
        n++;
        curr = curr.next;
    }

    const width = Math.floor(n / k); // Calculate the initial width of each linked list part (floor division)
    let rem = n % k; // Calculate the number of remaining nodes after evenly dividing the list

    let head = root; // Initialize a pointer 'head' to mark the beginning of the current part
    
    // Loop through the linked list to split it into 'k' parts
    for (let i = 0; head != null; i++) {
        let m = width;

        // If there are remaining nodes, distribute them evenly among parts
        if (rem > 0) {
            m += 1;
            rem--;
        }

        let tail = head; // Initialize 'tail' to 'head' to mark the end of the current part

        // Move 'tail' 'm' steps ahead to reach the end of the current part
        for (let j = 1; j < m; j++) {
            tail = tail.next;
        }

        const next = tail.next; // Save the next node after the current part
        tail.next = null; // Disconnect the current part from the rest of the list
        res[i] = head; // Store the head of the current part in the result array
        head = next; // Move 'head' to the next part of the linked list
    }

    return res; // Return the array containing the split linked list parts
};
