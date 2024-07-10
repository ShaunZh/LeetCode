/*
 * @Description: 242. Valid Anagram
 * @Author: Zhang jie
 * @Date: 2024-07-10 10:51:20
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-07-10 11:18:04
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // 1. create a array which size is 26, and fill them 0. 
    // Each item of the array represent the count of each letter. 
    // 2. iterate s, if the letter is in the array, get the item and plus one.
    // 3. iterate t, if the letter is in the array, get the item and minus one.
    // 4. iterate array, if each item equals to 0, that means s and t is an valid anagram, otherwise they are not.
    const letterArr = new Array(26).fill(0);
    const arrS = s.split('');
    const arrT = t.split('');

    for (let i = 0, len = arrS.length; i < len; i++) {
        const index = arrS[i].charCodeAt(0) - 97; // 97 represent the letter 'a'
        letterArr[index]++;
    }

    for (let i = 0, len = arrT.length; i < len; i++) {
        const index = arrT[i].charCodeAt(0) - 97;
        letterArr[index]--;
    }

    for (let i = 0; i < letterArr.length; i++) {
        if (letterArr[i] !== 0) {
            return false;
        }
    }
    return true;


};
