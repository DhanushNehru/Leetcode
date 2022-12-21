/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let resultArray = [], carry = 0;
    while(l1.next || l2.next ){   
        // The number of nodes in each linked list is in the range [1, 100]  
        const value = (l1.val + l2.val + carry) % 10;
        carry = l1.val + l2.val + carry >= 10 ? 1 : 0;
        resultArray.push(value);

        l1 = l1.next || new ListNode(0);
        l2 = l2.next || new ListNode(0);
    }

    const value = (l1.val + l2.val + carry) % 10;
    carry = l1.val + l2.val + carry >= 10 ? 1 : 0;
    resultArray.push(value);
    if (carry === 1) {
        resultArray.push(1);
    }

    let node = undefined;
    // for l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    // result array [8, 9, 9, 9, 0, 0, 0, 1]
    console.log(" result array ", resultArray)
    resultArray.reverse().forEach(item => {
        if (node === undefined) {
            node = new ListNode(item);
        } else {
            let newNode = new ListNode(item);
            newNode.next = node;
            node = newNode;
        }
    })
    return node;
};