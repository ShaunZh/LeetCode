/*
 * @Description: 54. Spiral Matrix
 * @Author: Zhang jie
 * @Date: 2024-02-20 09:56:18
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-02-20 11:56:03
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let left = 0, right = matrix[0].length - 1;
    let top = 0, bottom = matrix.length - 1;

    let arr = []
    while (left <= right && top <= bottom) {
        for (let col = left; col <= right; col++) {
            arr.push(matrix[top][col])
        }
        top++;

        for (let row = top; row <= bottom; row++) {
            arr.push(matrix[row][right])
        }
        right--;

        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                arr.push(matrix[bottom][col]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                arr.push(matrix[row][left])
            }
            left++;
        }

    }
    return arr
};
