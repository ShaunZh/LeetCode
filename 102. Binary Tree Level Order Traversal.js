/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // store the result
    const result = [];
    // store every item of each level of tree
    let queue = [];
    if (root === null) {
        return result;
    }
    queue.push(root);
    while (queue.length) {
        const length = queue.length;
        const arr = [];
        // iterate each level item
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            arr.push(node.val);
            // push child items into queue.
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        result.push(arr);
    }
    return result;
};