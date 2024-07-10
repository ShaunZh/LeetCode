/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection_solution1 = function (nums1, nums2) {
    const uniqueArr = [];
    if (nums1.length > nums2.length) {
        temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    for (let i = 0; i < nums1.length; i++) {
        const item = nums1[i];
        if (nums2.includes(item) && !uniqueArr.includes(item)) {
            uniqueArr.push(item);
        }
    }
    return uniqueArr;
};

/**

 * @param {*} nums1 
 * @param {*} nums2 
 * @returns 
 * @summary: 
 * Constraints:
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000;
 * 
 * Note, Because the length of nums1 and nums2 are limited less than 1000, so we can use array to store the data for creating hash table. If the length is not limited, we don't know the size of array, which we should create, in this case, we shouldn't use array. We can use Map or Object to store data.
 */
var intersection_solution_hash_with_array = function (nums1, nums2) {
    const arr = new Array(1005).fill(0);
    const uniqueArr = []
    nums1.forEach(it => arr[it] = 1);
    nums2.forEach(it => {
        if (arr[it] && !uniqueArr.includes(it)) {
            uniqueArr.push(it);
        }
    })
    return uniqueArr;
}

var intersection_solution_hash_with_map = function (nums1, nums2) {
    const map = new Map();
    const uniqueArr = []
    nums1.forEach(it => map.set(it, 1));
    nums2.forEach(it => {
        if (map.has(it) && !uniqueArr.includes(it)) {
            uniqueArr.push(it);
        }
    })
    return uniqueArr;
}


