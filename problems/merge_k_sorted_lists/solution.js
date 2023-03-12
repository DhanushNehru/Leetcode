/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergedLists = (a , b) => {
    const linkedList = new ListNode(0)
    let temp = linkedList
    while(a !== null && b !== null){
        if(a.val < b.val){
            temp.next = a
            a = a.next
        }
        else{
            temp.next = b
            b = b.next
        }
        temp = temp.next
    }

    if(a != null){
        temp.next = a
    }
    if(b != null){
        temp.next = b
    }
    return linkedList.next
}


var mergeKLists = function(lists) {
    if (lists.length === 0 ) {
        return null;
    }

    while(lists.length > 1){
        const a = lists.shift(), b = lists.shift();
        const mergedList = mergedLists(a, b)
        lists.push(mergedList)
    }

    return lists[0]
};