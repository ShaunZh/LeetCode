/*
 * @Description: 142. Linked List Cycle II
 * @Author: Zhang jie
 * @Date: 2024-04-18 11:14:48
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-04-18 11:14:51
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let fast = head;
    let slow = head;

    // 1. detecting the cycle;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            break;
        }
    }
    // the cycle is not exist;
    if (!fast || !fast.next) {
        return null;
    }

    // 2. get the start of the meeting
    let index1 = head;
    let index2 = fast;
    while (index1 !== index2) {
        index1 = index1.next;
        index2 = index2.next;
    }
    return index1;
};
