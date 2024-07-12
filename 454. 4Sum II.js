/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    // 1. define a map to store the sum of nums1 and nums2. the key of map is equal to the sum, the value of map is equal to the count of the sum exist.
    // 2. define a variable `count` to calculate the number of sum.
    // 3. iterate nums3 and nums4, getting the sum of them. if the sum is exist in the map, get value and add it to the count.
    // 4. finaly, return the count.
    const map = new Map();
    let count = 0;
    nums1.forEach(n1 => {
        nums2.forEach(n2 => {
            const val = n1 + n2;
            const res = map.get(val) || 0;
            map.set(val, res + 1);
        })
    })
    nums3.forEach(n3 => {
        nums4.forEach(n4 => {
            const val = n3 + n4;
            const res = map.get(0 - val);
            if (res) {
                count += res;
            }
        })
    })

    return count;
};