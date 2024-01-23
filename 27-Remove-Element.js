/*
 * @Description: 27. Remove Element
 * @Author: Zhang jie
 * @Date: 2024-01-23 19:08:56
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-01-23 19:18:48
 * @Problem Url: https://leetcode.com/problems/remove-element/description/
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * @summary two-pointer
 */
var removeElement = function (nums, val) {
    let fast = 0;
    let slow = 0;
    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow++] = nums[fast]
        }
        fast++;
    }
    return slow

} 
