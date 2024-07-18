/**
 * @description: https://leetcode.com/problems/3sum/description/
 * @param {*} nums
 * @return {*}
 */
var threeSum = function (nums) {
    // Using two-pointer algorithm to solve the problem
    // 1. sorting the nums in ascending sort
    nums.sort((a, b) => a - b);
    const result = []
    // 2. iterating the nums
    for (let i = 0; i < nums.length - 2; i++) {
        // 3. If the previous item in the position of `i`, which equals to the current item. we stop the current loop, because the item was processed yet.
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // 4. declaring two pointer: left and right. let left equals to i plus one, and
        // let right equals to nums.lenght minus one;
        let left = i + 1;
        let right = nums.length - 1;
        // 5. For each i, we use two pointer to find the other two numbers, which make nums[i] + nums[left] + nums[right] equal to 0
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                // 6. when the sum equals to 0, then skip the duplicates for left and right to avoid duplicate triplets.
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum > 0) {
                // 7. if the sum greater than 0, we need a smaller sum, so move right to the left;
                right--;
            } else {
                // 8. if the sum less than 0, that means we need a larger sum, so move left to the right.
                left++;
            }
        }
    }
    return result;
};