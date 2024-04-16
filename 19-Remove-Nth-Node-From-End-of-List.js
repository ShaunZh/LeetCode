/*
 * @Description: 19. Remove Nth Node From End of List
 * @Author: Zhang jie
 * @Date: 2024-04-16 11:20:48
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-04-16 11:29:02
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * @summary use two pointer to solve this problem: fast and slow
 * prepare, a dummyHead node, let it point to head; then decalre two point fast and slow and let them point to dummyHead
 * firstly, the fast move  n + 1 steps
 * secondly, all of the fast and slow move until fast equal to null
 * thirdly, remove the next item of slow
 * lastly, return dummyHead.next;
 * 
 * why the fast point need to move n + 1 steps?
 * this is make slow point to the previous node of the target node. so it need do it.
 */

var removeNthFromEnd = function (head, n) {
    let dummyHead = new ListNode();
    dummyHead.next = head;
    let fast = dummyHead;
    let slow = dummyHead;

    // move n steps
    while (n-- && fast.next !== null) {
        fast = fast.next;
    }
    // move step n + 1
    fast = fast.next;

    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;

    return dummyHead.next;
};