/*
 * @Description: 203. Remove Linked List Elements
 * @Author: Zhang jie
 * @Date: 2024-02-27 15:12:02
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-02-27 15:12:05
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    const dummy = new ListNode(null, head);
    let cur = dummy;
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
            continue;
        }
        cur = cur.next;
    }
    return dummy.next;
};