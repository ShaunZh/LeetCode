/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const pathArr = path.split('/');
    const stack = [];
    
    for (let item of pathArr) {
        if (item === '' || item === '.') {
            continue;
        } else if (item === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(item);
        }
    }
    return '/' + stack.join('/');
};

// @lc code=end

