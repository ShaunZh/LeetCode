/*
 * @Description: remove element
 * @Author: Zhang jie
 * @Date: 2023-12-18 10:26:07
 * @LastEditors: Zhang jie
 * @LastEditTime: 2023-12-18 10:49:55
 * @Problem url: https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let j = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] !== val) {
            nums[j++] = nums[i]
        }
    }
    return j;
};
