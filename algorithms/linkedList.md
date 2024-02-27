<!--
 * @Description: linked list in JavaScript
 * @Author: Zhang jie
 * @Date: 2024-02-27 15:07:31
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-02-27 19:01:11
-->

## A Linked List in JavaScript

### Some tips
- use `dummy node` as `head` to avoid edge cases
- use `size` to calculate the length of the linked list


### Define a node
```js
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
```
