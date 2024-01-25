/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let slow = 0;
    let minLength = Infinity;
    let sum = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        sum += nums[fast];
        while (sum >= target) {
            let len = fast - slow + 1;
            minLength = minLength > len ? len : minLength;
            sum -= nums[slow++];
        }
    }
    return minLength > nums.length ? 0 : minLength;
};
// @lc code=end

