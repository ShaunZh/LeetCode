/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let arr = [];
    for (let l of s) {
        if (l === arr[arr.length - 1]) {
            arr.pop();
        } else {
            arr.push(l);
        }
    }
    return arr.join('');
};
