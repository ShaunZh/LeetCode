/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    const len = s.length;
    for (let i = 1; i <= (len >> 1); i++) {
        if (len % i === 0) {
            const str = s.slice(0, i).repeat(len / i);
            if (str === s) {
                return true;
            }
        }
    }
    return false;
};