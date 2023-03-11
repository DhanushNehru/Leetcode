/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    // Converting LL into array
    let arr = getarr(head);
    //Now, using tree function to get an tree out of SORTED ARRAY
    return tree(arr);
    
};

function getarr(head){
    // if(!head) return [];
    let temp = head;
    const arr = []
    while(temp){
        arr.push(temp.val);
        temp = temp.next;
    }
    return arr;
}

function tree(nums, start=0, end = nums.length-1) {
    if(start<=end){
        const mid = Math.floor((start+end)/2);
        const root = new TreeNode(nums[mid]); // Definition of a binary TreeNode is given
        // In a binary tree, root element will stay, left element will be smaller than the root, right element will be larger than the root
        root.left = tree(nums, start, mid-1);  // start < mid - 1
        root.right = tree(nums, mid+1, end);   // mid+1 < end
        return root;
    }
    return null;
};