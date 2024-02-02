/*
 * @Description: 844. Backspace String Compare
 * @Author: Zhang jie
 * @Date: 2024-02-02 10:42:04
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-02-02 10:51:37
 * @Problem Url: https://leetcode.com/problems/backspace-string-compare/submissions/1163508783/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @summary the first solution
 */
var backspaceCompare = function (s, t) {
    let pos = 0;
    let newS = "";
    while (pos < s.length) {
        if (s[pos] !== "#") {
            newS = newS + s[pos];
        } else if (newS) {
            newS = newS.slice(0, newS.length - 1);
        } else {
            newS = "";
        }
        pos++;
    }
    let posT = 0;
    let newT = "";
    while (posT < t.length) {
        if (t[posT] !== "#") {
            newT = newT + t[posT];
        } else if (newT) {
            newT = newT.slice(0, newT.length - 1);
        } else {
            newT = "";
        }
        posT++;
    }
    return newS === newT
}

/**
 * How to improve?
 * 1. tranform string to array
 * 2. use array to deal 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @summary the optimizing solution
 */
var removeBackspace = (s) => {
    let newArr = []
    let pos = 0;
    while (pos < s.length) {
        if (s[pos] !== "#") {
            newArr.push(s[pos]);
        } else if (newArr.length) {
            newArr.pop();
        }
        pos++;
    }
    return newArr;
}

var backspaceCompare = function (s, t) {
    let arrS = s.split("");
    let arrT = t.split("");
    let newS = removeBackspace(arrS).join("");
    let newT = removeBackspace(arrT).join("");
    return newS === newT;
}