/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (head.length <= 1 || left === right) {
        return head;
    }
    const dummy = new ListNode();
    dummy.next = head;

    let pre = dummy;

    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }

    let current = pre.next;
    let temp = null
    // current = 2; pre = 1;
    // 1    2   3   4   5 => 1   3   2   4   5
    // pre cur
    for (let i = 0; i < right - left; i++) {
        temp = current.next; // temp = 3
        current.next = temp.next; // 2 -> 4
        temp.next = pre.next;
        pre.next = temp;

        console.log('pre = ', pre)
        console.log('current = ', current)
    }
    return dummy.next


};
// @lc code=end



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetweenArray = function (head, left, right) {
    if (left === right) {
        return head;
    }
    const nodeList = [];
    while (head) {
        nodeList.push(head.val);
        head = head.next;
    }
    const leftArr = [];
    const rightArr = [];
    const midArr = [];

    nodeList.forEach((it, index) => {
        if (index < left - 1) {
            leftArr.push(it);
        } else if (index >= left - 1 && index < right) {
            midArr.push(it)
        } else {
            rightArr.push(it)
        }
    })

    const finalArr = leftArr.concat(midArr.reverse()).concat(rightArr);
    console.log(finalArr)
    const newHead = temp = new ListNode();
    finalArr.forEach(it => {
        temp.next = new ListNode(it);
        temp = temp.next;
    })
    return newHead.next
};
