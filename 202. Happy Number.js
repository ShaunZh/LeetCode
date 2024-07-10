/**
 * @param {number} n
 * @return {boolean}
 * @constraints: 1 <= n <= 2**31 - 1
 * @summary how to know it is not a happy number?
 * if the sum was occured before, it is not a happy number, so we need to keep track of the sum.
 * From the constraints we know that `n` may be a big number, so we should not use array to keep track of the sum, we use Map to do it.
 */
var isHappy = function (n) {
    const sumMap = new Map();
    let sum = n;
    sumMap.set(n, true);
    while (1) {
        const str = String(sum);
        const arr = str.split('');
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result += ((Number(arr[i])) ** 2)
        }
        if (result === 1) {
            return true;
        }
        if (sumMap.get(result)) {
            return false;
        }
        sumMap.set(result, true);
        sum = result;
    }
};