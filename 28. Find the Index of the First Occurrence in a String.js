/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const hLen = haystack.length;
    const nLen = needle.length;
    for (let i = 0; i <= hLen - nLen; i++) {
        let j = 0;
        for (j = 0; j < nLen; j++) {
            if (haystack[i + j] !== needle[j])
                break;
        }
        if (j === nLen)
            return i;
    }
    return -1;
};