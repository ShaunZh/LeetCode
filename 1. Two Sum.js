/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0, len = nums.length; i < len; i++) {
        const minusValue = target - nums[i];
        const item = map.get(minusValue);
        if (item !== undefined) {
            return [i, item];
        }
        map.set(nums[i], i);
    }
    return [];
};