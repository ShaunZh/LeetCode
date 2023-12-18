/*
 * @Description: merge sorted array
 * @Author: Zhang jie
 * @Date: 2023-12-18 10:51:00
 * @LastEditors: Zhang jie
 * @LastEditTime: 2023-12-18 10:54:23
 * @Problem Url: https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let z = m + n - 1;
    while (z >= 0) {
        if (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[z] = nums1[i]
                i--;
            } else {
                nums1[z] = nums2[j]
                j--;
            }
        } else if (i < 0) {
            nums1[z] = nums2[j]
            j--
        } else if (j < 0) {
            nums1[z] = nums1[i]
            i--
        }
        z--;
    }
};


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge_optimized = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let z = m + n - 1;
    while (z >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[z--] = nums1[i--]
        } else {
            nums1[z--] = nums2[j--]
        } 
    }
};


