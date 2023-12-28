/*
 * @Description: 189. Rotate Array
 * @Author: Zhang jie
 * @Date: 2023-12-28 09:52:46
 * @LastEditors: Zhang jie
 * @LastEditTime: 2023-12-28 09:52:49
 * @Proble URL : https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const len = nums.length
    const c = k % len;
    const arr = nums.splice(len - c);
    nums.splice(0, 0, ...arr);
};
