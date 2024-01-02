/*
 * @Description: 122. Best Time to Buy and Sell Stock II
 * @Author: Zhang jie
 * @Date: 2023-12-29 09:47:17
 * @LastEditors: Zhang jie
 * @LastEditTime: 2024-01-02 19:15:36
 * @Problem Url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * A                                            
 *  |                                   G    
 *   |                    E           |     
 *    |     C           |   |       |
 *     |  |   |       |       |   |     
 *      B       |   |           F
 *                D
 *
 * the max profit is the sum of all the profit of each peak and valley， 
 * that is (B - C) + (D - E) + (F - G)
 * /
/**
 * @param {number[]} prices
 * @return {number}
 * 
 */
var maxProfit = function (prices) {
    
    let profit = 0;

    for (let pos = 0; pos < prices.length; pos++) {
        if (prices[pos + 1] > prices[pos]) {
            profit += (prices[pos + 1] - prices[pos]);
        }

    }
    return profit;

};
