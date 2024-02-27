/*
 * @Description: 707. Design Linked List
 * @Author: Zhang jie
 * @Date: 2024-02-27 18:58:57
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-02-27 18:59:00
 */

class LinkedNode {
    val;
    next = null
    constructor(val, next) {
        this.val = val === undefined ? -1 : val;
        this.next = next === undefined ? null : next;
    }
}

var MyLinkedList = function () {
    this.head = new LinkedNode();
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) {
        return -1;
    }
    cur = this.head.next;
    while (index--) {
        cur = cur.next;
    }
    return cur.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new LinkedNode(val);
    newNode.next = this.head.next;
    this.head.next = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let cur = this.head;
    while (cur.next) {
        cur = cur.next;
    }
    const newNode = new LinkedNode(val);
    cur.next = newNode;
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) {
        return;
    }
    let newIndex = index;
    if (index < 0) {
        newIndex = 0;
    }
    let cur = this.head;
    while (newIndex--) {
        cur = cur.next;
    }
    const newNode = new LinkedNode(val);
    newNode.next = cur.next;
    cur.next = newNode;
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) {
        return;
    }
    let cur = this.head;
    while (index--) {
        cur = cur.next;
    }
    cur.next = cur.next.next
    this.size--;

};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
