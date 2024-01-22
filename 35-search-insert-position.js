/*
 * @Description: 35-search-insert-position
 * @Author: Zhang jie
 * @Date: 2024-01-22 21:48:25
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-01-22 21:49:51
 * @Problem Url: https://leetcode.com/problems/search-insert-position/description/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = -1;
    while (left <= right) {
        mid = left + ((right - left) >> 1);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    if (nums[mid] > target) {
        return mid;
    } else {
        return mid + 1;
    }

};