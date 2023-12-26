/*
 * @Description: Majority Element
 * @Author: Zhang jie
 * @Date: 2023-12-20 09:49:08
 * @LastEditors: Zhang jie
 * @LastEditTime: 2023-12-26 22:21:10
 * @Problem Url: https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
 * @Relational Algorithm: Boyer-moore voting algorithm (https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/)
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = 0;
    let el = nums[0];
    let len = nums.length;
    let i = 0;
    for (i = 0, len = nums.length; i < len; i++) {
        if (el === nums[i]) {
            count++;
        } else {
            count--;
        }
        if (count === 0) {
            el = nums[i];
            count = 1;
        }
    }
    return el;
};