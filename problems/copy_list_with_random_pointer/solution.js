/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    // Create a Map to store the mapping between original nodes and their corresponding copied nodes.
    const map = new Map()

    // Define a recursive helper function 'copy' to copy the linked list.
    const copy = (node) => {
        // Base case: If the node is null, return null.
        if (!node) {
            return null
        }
        
        // Check if the node has already been copied; if so, return the copied node.
        if (map.get(node) != null) {
            return map.get(node)
        }

        // Create a new node with the same value as the original node.
        const n = new Node(node.val)
        
        // Store the mapping between the original node and the copied node in the Map.
        map.set(node, n)

        // Recursively copy the 'next' and 'random' pointers of the current node.
        n.next = copy(node.next);
        // The "random" pointer in a linked list can point to any node in the list, including nodes that come before or after the current node. By copying the "random" pointers, you ensure that the structure and relationships within the copied list match the original list.
        n.random = copy(node.random);

        // Return the copied node.
        return n
    }

    // Start the copying process from the head of the original linked list and return the copied head.
    return copy(head)
};