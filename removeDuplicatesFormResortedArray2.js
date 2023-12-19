/*
 * @Description: remove duplicates from resorted array II
 * @Author: Zhang jie
 * @Date: 2023-12-19 16:12:03
 * @LastEditors: Zhang jie
 * @LastEditTime: 2023-12-19 17:17:27
 * @Problem Url: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 0,1,1,1,1,2,3,3
 * 1,1,1,2,2,3
 * [1,1,1,2,2,3]
 * 0,0,1,1,1,1,2,3,3
 * 0,0,1,1,2,3,2,3,3
 */
var removeDuplicates = function (nums) {
    let i = 1;
    let index = 0
    let count = 1;
    for (let len = nums.length; i < len; i++) {
        if (nums[index] === nums[i]) {
            count++;
        } else {
            index++;
            if (count >= 2 && i < len - 1) { 
                index++;
            }
            count = 1;
            nums[index] = nums[i]
        }
    }
    return index + 1;
};

var removeDuplicates_resolve = function (nums) { 
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (j < 2 || nums[i] > nums[j - 2]) {
            nums[j++] = nums[i]
        }
    }
    return j;
}
