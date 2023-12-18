/*
 * @Description: remove duplicates from resorted array
 * @Author: Zhang jie
 * @Date: 2023-12-18 13:58:56
 * @LastEditors: Zhang jie
 * @LastEditTime: 2023-12-18 14:18:44
 * @Problem Url: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0;
    let j = 1;
    let len = nums.length;
    while (j < len) {
        if (nums[i] === nums[j]) {
            j++;
        } else {
            nums[++i] = nums[j++]
        }
    }
    return i + 1;
};