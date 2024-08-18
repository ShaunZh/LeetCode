/**
 * @param {string} s
 * @return {boolean}
 */
const obj = {
    '(': ')',
    '{': '}',
    '[': ']',
}
var isValid = function (s) {
    const stack = []

    for (l of s) {
        const c = obj[l];
        if (c) {
            stack.push(c);
        } else if (stack.pop() !== l) {
            return false;
        }
    }
    return !stack.length;
};