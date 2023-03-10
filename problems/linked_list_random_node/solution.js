/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.arr = []
    while(head!=null){
        this.arr.push(head.val)
        head = head.next
    }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    return this.arr[Math.floor(Math.random() * this.arr.length)]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */