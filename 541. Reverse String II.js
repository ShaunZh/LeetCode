/*
 * @Description: 541. Reverse String II
 * @Author: Zhang jie
 * @Date: 2024-08-02 17:00:26
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-08-02 17:00:29
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    const arr = s.split('');
    for (let i = 0; i < arr.length; i += (2 * k)) {
        let r = (i + k) > arr.length ? arr.length : (i + k)
        let l = i - 1;
        while (++l < --r) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
        }
    }
    return arr.join('');
};
