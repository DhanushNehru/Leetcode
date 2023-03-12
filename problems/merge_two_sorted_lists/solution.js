/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // similar problem : https://leetcode.com/problems/merge-k-sorted-lists/
    const linkedList = new ListNode(0)
    let temp = linkedList
    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            temp.next = list1
            list1 = list1.next
        }
        else{
            temp.next = list2
            list2 = list2.next
        }
        temp = temp.next
    }

    if(list1 != null){
        temp.next = list1
    }
    if(list2 != null){
        temp.next = list2
    }
    return linkedList.next
};