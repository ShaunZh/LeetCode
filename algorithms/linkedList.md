<!--
 * @Description: linked list in JavaScript
 * @Author: Zhang jie
 * @Date: 2024-02-27 15:07:31
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-02-27 15:10:00
-->

## A Linked List in JavaScript

### Define a node
```js
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
```
