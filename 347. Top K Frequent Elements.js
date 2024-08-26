/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let obj = {};
    let map = new Map
    for (let it of nums) {
        map.set(it, (map.get(it) || 0) + 1)
    }
    const arr = [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(it => it[0])

    return arr;

};