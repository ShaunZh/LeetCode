/*
 * @Description: 
 * @Author: Zhang jie
 * @Date: 2024-01-22 22:14:58
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-01-22 22:15:00
 * @Problem Url: https://leetcode.com/problems/valid-perfect-square/description/
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let left = 0;
    let right = num;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        let result = mid * mid;
        if (result > num) {
            right = mid - 1;
        } else if (result < num) {
            left = mid + 1;
        } else {
            return true;
        }
    }
    return false;
};
