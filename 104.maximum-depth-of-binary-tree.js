/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var getDepth = function (root) {
    if (!root) return 0;
    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    // the 1 represents the middle node.
    return 1 + Math.max(leftDepth, rightDepth);
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left, root.right))
};
// @lc code=end

