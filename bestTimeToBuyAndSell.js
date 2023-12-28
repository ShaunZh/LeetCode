/*
 * @Description: 121 Best Time to Buy and Sell Stock
 * @Author: Zhang jie
 * @Date: 2023-12-28 20:00:55
 * @LastEditors: Zhang jie
 * @LastEditTime: 2023-12-28 20:14:10
 * @Problem URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let len = prices.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            const temp = prices[j] - prices[i]
            if (temp <= 0) {
                break;
            } else if (temp > profit) {
                profit = temp;
            }
        }
    }
    return profit;
};

// optimize
var maxProfit = function (prices) {
    let profit = 0;
    let left = 0;

    for (let right = 1; right < prices.length; right++) {
        if (prices[left] > prices[right]) {
            left = right;
        } else {
            profit = Math.max(profit, prices[right] - prices[left]);
        }
    }
    return profit;
};



