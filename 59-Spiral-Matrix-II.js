/*
 * @Description: 59. Spiral Matrix II
 * @Author: Zhang jie
 * @Date: 2024-02-19 15:23:23
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-02-19 15:27:50
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let loop = Math.floor(n / 2);
    let mid = Math.floor(n / 2);
    let startX = 0;
    let startY = 0;
    let count = 1;
    let offset = 1;
    // creat two-dimensional array
    const arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
    while (loop--) {
        let col = startX;
        let row = startY;

        for (; col < n - offset; col++) {
            arr[row][col] = count++;
        }
        for (; row < n - offset; row++) {
            arr[row][col] = count++;
        }
        for (; col > startX; col--) {
            arr[row][col] = count++;
        }
        for (; row > startY; row--) {
            arr[row][col] = count++;
        }
        startX++;
        startY++;
        offset++;
    }
    if (n % 2) {
        arr[mid][mid] = count;
    }

    return arr;
};