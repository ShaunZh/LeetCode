/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let squareArr = [];
    let k = nums.length - 1;
    for (let left = 0, right = nums.length - 1; left <= right;) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];
        if (leftSquare < rightSquare) {
            squareArr[k--] = rightSquare;
            right--;
        } else {
            squareArr[k--] = leftSquare;
            left++;
        }
    }
    return squareArr;

};