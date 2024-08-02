/*
 * @Description: 344. Reverse String
 * @Author: Zhang jie
 * @Date: 2024-08-02 15:58:08
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-08-02 15:58:11
 * @Problem Url: https://leetcode.com/problems/reverse-string/description/
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    for (let i = 0; i < s.length >> 1; i++) {
        const temp = s[i];
        const lastIndex = s.length - i - 1;
        s[i] = s[lastIndex];
        s[lastIndex] = temp;
    }
    return s;
};
