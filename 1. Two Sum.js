/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @summary using hash table to solve it.
 */
var twoSum = function (nums, target) {
    // 1. use hash table store nums
    // 2. iterate nums and use target minus the current item. 
    // 3. check the item if exist in the map and visited.
    const map = new Map()
    nums.forEach((it, index) => map.set(it, { index }));
    for (let i = 0, len = nums.length; i < len; i++) {
        const minusValue = target - nums[i];
        const item = map.get(minusValue);
        if (item && item.index !== i) {
            return [i, item.index];
        }
    }
    return [];
};