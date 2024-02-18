/*
 * @Description: 904. Fruit Into Baskets
 * @Author: Zhang jie
 * @Date: 2024-02-18 09:52:18
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-02-18 09:52:25
 */

/**
 * @param {number[]} fruits
 * @return {number}
 0 1 2 1 2 3 1 
 */
var totalFruit = function (fruits) {
    const countMap = new Map();
    let max = 0;
    for (let i = 0, j = 0; j < fruits.length; j++) {
        let el = fruits[j];
        countMap.set(el, (countMap.get(el) + 1) || 1);
        if (countMap.size > 2) {
            i = j - 1;
            let temp = fruits[i--]
            while (fruits[i] === temp) {
                i--;
            }
            countMap.delete(fruits[i])
            i++;
        }
        if (countMap.size >= 1) max = Math.max(max, j + 1 - i);
    }
    return max;
};