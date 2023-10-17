/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    // Combine all child nodes into a set to identify parent nodes.
    const allChildren = new Set([...leftChild, ...rightChild]);

    // Find the root node (the node without a parent).
    const nodes = Array.from({ length: n }, (_, i) => i);
    const roots = nodes.filter(node => !allChildren.has(node));
    if (roots.length !== 1) {
        return false;
    }
    const root = roots[0];

    const seen = new Set();
    const stack = [root];

    // Use DFS to traverse the tree.
    while (stack.length > 0) {
        const node = stack.pop();
        const children = [leftChild[node], rightChild[node]];
        for (const child of children) {
            if (child !== -1) {
                if (seen.has(child)) {
                    // The node has a parent already.
                    return false;
                }
                seen.add(child);
                stack.push(child);
            }
        }
    }

    // Ensure that all nodes have been visited
    // exactly once, except the root.
    return seen.size === n - 1;
};