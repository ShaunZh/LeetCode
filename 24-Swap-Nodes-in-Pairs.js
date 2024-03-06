/*
 * @Description: 24. Swap Nodes in Pairs
 * @Author: Zhang jie
 * @Date: 2024-03-06 14:24:58
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-03-06 14:25:09
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    dummy = new ListNode();
    dummy.next = head;
    cur = dummy;
    // cur = dummy -> 1 -> 2 -> 3 -> 4
    // step 1: cur -> 2
    // step 2: 2 -> 1
    // step 3: 1 -> 3
    while (cur.next && cur.next.next) {
        // contain cur.next
        temp = cur.next
        // contain 3
        temp1 = cur.next.next.next;

        // cur -> 2
        cur.next = cur.next.next;
        // 2 -> 1
        cur.next.next = temp;
        // 1 -> 3
        cur.next.next.next = temp1;

        // cur move back two node.
        cur = cur.next.next;
    }
    return dummy.next;
};
