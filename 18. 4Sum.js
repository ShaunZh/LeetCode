/*
 * @Description: 18. 4Sum
 * @Author: Zhang jie
 * @Date: 2024-08-02 14:49:16
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-08-02 15:07:17
 * @Problem URL: https://leetcode.com/problems/4sum/
 */
function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    if (nums.length < 4) {
        return []
    }

    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && nums[i] > target) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let k = i + 1; k < nums.length; k++) {
            if (nums[k] > 0 && nums[i] + nums[k] > target) {
                break;
            }
            if (k > i + 1 && nums[k] === nums[k - 1]) {
                continue;
            }
            let left = k + 1;
            let right = nums.length - 1;
            while (left < right) {
                const temp = nums[i] + nums[k] + nums[left] + nums[right];
                if (temp > target) right--;
                else if (temp < target) left++;
                else {
                    result.push([nums[i], nums[k], nums[left], nums[right]]);
                    while (right > left && nums[right] === nums[right - 1]) right--;
                    while (right > left && nums[left] === nums[left + 1]) left++;
                    left++;
                    right--;
                }
            }
        }
    }
    return result;
}

