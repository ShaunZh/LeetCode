/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * @summary 
 * 1. calculate the length of every linked list
 * 2. get the longest linked list and calculate the difference between two linked list
 * 3. let the longest linked list move the difference steps
 * 4. move all linked list for finding the equivalent value.
 * 5. comparing the rest value, if they are not equivalent then reture null, otherwise return the equivalent node
 */
var getIntersectionNode = function (headA, headB) {

    let curA = headA;
    let curB = headB;

    let lenA = 0;
    let lenB = 0;
    while (curA !== null) {
        curA = curA.next;
        lenA++;
    }
    while (curB !== null) {
        curB = curB.next;
        lenB++;
    }
    curA = headA;
    curB = headB;

    if (lenB > lenA) {
        let temp = lenA;
        lenA = lenB;
        lenB = temp;

        let tempLinked = curA;
        curA = curB;
        curB = tempLinked;
    }

    let count = lenA - lenB;
    while (count--) {
        curA = curA.next;
    }

    while (curA !== curB) {
        curA = curA.next;
        curB = curB.next;
    }

    if (curA === null) {
        return null;
    }
    const point = curA;

    while (curA) {
        if (curA !== curB) {
            return null;
        }
        curA = curA.next;
        curB = curB.next;
    }
    return point;
};