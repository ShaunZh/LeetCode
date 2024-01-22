/*
 * @Description: 69. Sqrt(x)
 * @Author: Zhang jie
 * @Date: 2024-01-22 22:08:31
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-01-22 22:09:34
 * @Problem Url: https://leetcode.com/problems/sqrtx/description/ 
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let left = 0;
    let right = x;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        let result = mid * mid;
        if (result > x) {
            right = mid - 1;
        } else if (result < x) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return right;
};